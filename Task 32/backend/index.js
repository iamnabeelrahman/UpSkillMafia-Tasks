const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const User = require("./Models/register.models");
const UserDetail = require("./Models/userDetails.models")
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/register", async function (req, res) {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    console.log("Username and password requires");
    return res.json({
      error: "Username and password requires",
    });
  }

  try {
    const existingUSer = await User.findOne({ username: username });
    if (existingUSer) {
      console.log("Username already exixst");
      return res.status(400).json({
        error: "Username already exist",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username: username,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json({
      msg: "User registered successfully",
    });
  } catch (error) {
    console.log("Couldnt register user", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
});

app.post("/login",async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.findOne({ username }); // Searching for the user in MongoDB
  console.log("User found:", user); // Log user object

  if (!user) {
    console.log("User not found");
    return res.status(404).json({ error: "User not found" });
  }


  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ username }, 'secretkey', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({
      error: "Siging error occured"
    });
  }
});


const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token required');

  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) return res.status(401).send('Invalid token');
    req.user = decoded;
    next();
  });
};


app.post('/save',verifyToken,  async function (req, res){
  const name = req.body.name;
  const email = req.body.email;
  const age = req.body.age;
  const instaUsername = req.body.instaUsername;

  const newUserDetail = new UserDetail({
    name: name,
    email: email,
    age: age,
    instaUsername: instaUsername
  });

try {
  await newUserDetail.save();
  return res.status(201).json({
    msg: "Details saved successfully",
  });  
} catch (error) {
  console.error("Error saving data ", error)
  return res.json({
    error: "Internal server error",
    details: error.message
  })
}
})

app.get('/read', verifyToken, async function(req, res){
  try {
    const UserDetails = await UserDetail.find();
    return res.json({UserDetails})
  } catch (error) {
    console.error("Error in retrieving user details ", error)
    return res.status(500).json({
      error: "Internal server error"
    })
  }
})

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});

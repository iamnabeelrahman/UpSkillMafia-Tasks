const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../frontend", "index.html")));

app.get("/", (req, res) => {
  // send static frontend here
  res.send("this is you assignment")

});

app.post("/submit", (req, res) => {
  const { email, name, message } = req.body; //query, param

  if (!name || !email || !message) {
    let errorMessage = "All feild is required";
    return res.status(500).send(
        `
        <html lang="en">
    <head>
    
        <title>Submit</title>
    </head>
    <body>
            <h2> Error</h2>
        <p> <a href="/"> Go back</a> </p>
    </body>
    </html>
            `
      );
  }



  return res.send(
    `
    <html lang="en">
<head>

    <title>Thank You</title>
</head>
<body>
        <h2> Thankyou, ${name}</h2>
    <p> Your response has been received, we will get back to you soon </p>
</body>
</html>
        `
  );
});

app.listen(3003, () => {
  console.log(`App is runnning at 3003`);
});

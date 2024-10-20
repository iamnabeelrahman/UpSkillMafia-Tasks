const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Nabeel:Nusrat@clusterforpractice.qd1hf.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("userDetails MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  instaUsername: {
    type: String,
  },
});

const UserDetail = mongoose.model("UserDetail", userDetailsSchema);
module.exports = UserDetail;

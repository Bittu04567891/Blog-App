const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default:
        "https://th.bing.com/th/id/OIP.9vm7eDbnZS6Yy4ETUfEBAgAAAA?rs=1&pid=ImgDetMain",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

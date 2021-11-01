const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 20,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);

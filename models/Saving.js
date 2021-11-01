const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const savingSchema = new mongoose.Schema(
  {
    id_book: {
      type: ObjectId,
      ref: "Book",
    },
    detail: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
      text: true,
    },
    price: {
      type: Number,
    },
    date: {
      type: Date,
    },
    observations: {
      type: String,
      trim: true,
      maxlength: 200,
      text: true,
    },
    category: {
      type: String,
      enum: ["Auto", "Casa", "Educación"],
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

module.exports = mongoose.model("Saving", savingSchema);

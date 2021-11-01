const mongoose = require("mongoose");

const fixedSchema = new mongoose.Schema(
  {
    id_book: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
      text: true,
    },
    cost: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32,
    },
    expiration: {
      type: Date,
    },
    payment_date: {
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
      enum: [
        "Alimentación",
        "Belleza y Salud",
        "Credito",
        "Educación",
        "Gastos comunes",
      ],
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

module.exports = mongoose.model("FixedExpense", fixedSchema);

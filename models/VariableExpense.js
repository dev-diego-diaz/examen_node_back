const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const variableSchema = new mongoose.Schema(
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
    date_purchase: {
      type: Date,
    },
    quotas: {
      type: Number,
    },
    final_cost: {
      type: Number,
    },
    first_quota: {
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

module.exports = mongoose.model("VariableExpense", variableSchema);

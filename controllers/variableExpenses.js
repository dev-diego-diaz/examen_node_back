const Variable = require("../models/VariableExpense");
const slugify = require("slugify");

exports.list = async (req, res) => {
  res.json(await Variable.find({}).sort({ createdAt: -1 }).exec());
};

// Create variable expense
exports.create = async (req, res) => {
  try {
    const {
      id_book,
      detail,
      date_purchase,
      quotas,
      final_cost,
      first_quota,
      observations,
      category,
    } = req.body;

    res.json(
      await new Variable({
        id_book,
        detail,
        date_purchase,
        quotas,
        final_cost,
        first_quota,
        observations,
        category,
        slug: slugify(detail),
      }).save()
    );
  } catch (err) {
    res.status(400).send("Create variable expense failed");
  }
};

// Find one Variable Expense
exports.read = async (req, res) => {
  let theVariable = await Variable.findOne({ slug: req.params.slug }).exec();
  res.json(theVariable);
};

// Update one Variable Expense
exports.update = async (req, res) => {
  const { detail, cost, expiration, payment_date, observations, category } =
    req.body;

  try {
    const updated = await Variable.findOneAndUpdate(
      { slug: req.params.slug },
      {
        detail,
        cost,
        expiration,
        payment_date,
        observations,
        category,
        slug: slugify(detail),
      },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("Update variable expensive failed");
  }
};

// Delete one Variable Expense
exports.remove = async (req, res) => {
  try {
    const deleted = await Variable.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Delete variable failed");
  }
};

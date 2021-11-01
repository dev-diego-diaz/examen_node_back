const Fixed = require("../models/FixedExpense");
const slugify = require("slugify");

exports.list = async (req, res) => {
  res.json(await Fixed.find({}).sort({ createdAt: -1 }).exec());
};

// Create Fixed
exports.create = async (req, res) => {
  try {
    const {
      id_book,
      detail,
      cost,
      expiration,
      payment_date,
      observations,
      category,
    } = req.body;
    res.json(
      await new Fixed({
        id_book,
        detail,
        cost,
        expiration,
        payment_date,
        observations,
        category,
        slug: slugify(detail),
      }).save()
    );
  } catch (err) {
    res.status(400).send("Create fixed failed");
  }
};

// Find one book
exports.read = async (req, res) => {
  let theFixed = await Fixed.findOne({ slug: req.params.slug }).exec();
  res.json(theFixed);
};

// Update Fixed
exports.update = async (req, res) => {
  const { detail, cost, expiration, payment_date, observations, category } =
    req.body;

  try {
    const updated = await Fixed.findOneAndUpdate(
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
    res.status(400).send("Update fixed expensive failed");
  }
};

// Delete Books
exports.remove = async (req, res) => {
  try {
    const deleted = await Fixed.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Delete Fixed failed");
  }
};

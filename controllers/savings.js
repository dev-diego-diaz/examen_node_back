const Saving = require("../models/Saving");
const slugify = require("slugify");

// List savings
exports.list = async (req, res) => {
  res.json(await Saving.find({}).sort({ createdAt: -1 }).exec());
};

// Create saving
exports.create = async (req, res) => {
  try {
    const { detail, id_book, price, date, observations, category } = req.body;

    console.log(req.body);

    res.json(
      await new Saving({
        detail,
        id_book,
        price,
        date,
        observations,
        category,
        slug: slugify(detail),
      }).save()
    );
  } catch (err) {
    res.status(400).send("Create saving failed");
  }
};

// Find one saving
exports.read = async (req, res) => {
  let theSaving = await Saving.findOne({ slug: req.params.slug }).exec();
  res.json(theSaving);
};

// Update one saving
exports.update = async (req, res) => {
  const { detail, id_book, price, date, observations, category } = req.body;

  try {
    const updated = await Saving.findOneAndUpdate(
      { slug: req.params.slug },
      {
        detail,
        id_book,
        price,
        date,
        observations,
        category,
        slug: slugify(detail),
      },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("Update saving failed");
  }
};

// Delete one saving
exports.remove = async (req, res) => {
  try {
    const deleted = await Saving.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Delete saving failed");
  }
};

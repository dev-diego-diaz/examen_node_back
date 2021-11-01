const Book = require("../models/Book");
const slugify = require("slugify");

// List Books
exports.list = async (req, res) => {
  res.json(await Book.find({}).sort({ createdAt: -1 }).exec());
};

// Create Book
exports.create = async (req, res) => {
  try {
    const { id_user, title } = req.body;
    res.json(
      await new Book({
        id_user,
        title,
        slug: slugify(title),
      }).save()
    );
  } catch (err) {
    res.status(400).send("Create book failed");
  }
};

// Find one book
exports.read = async (req, res) => {
  let theBook = await Book.findOne({ slug: req.params.slug }).exec();
  res.json(theBook);
};

// Updaye Books
exports.update = async (req, res) => {
  const { title } = req.body;

  try {
    const updated = await Book.findOneAndUpdate(
      { slug: req.params.slug },
      { title, slug: slugify(title) },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("Update book failed");
  }
};

// Delete Books
exports.remove = async (req, res) => {
  try {
    const deleted = await Book.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Delete book failed");
  }
};

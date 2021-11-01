const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { list, create, read, update, remove } = require("../controllers/books");

// endpoints routes
router.post("/books", list);
router.post("/book", create);
router.get("/book/:slug", read);
router.put("/book/:slug", update);
router.delete("/book/:slug", remove);

module.exports = router;

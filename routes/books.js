const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { list, create, read, update, remove } = require("../controllers/books");

// endpoints routes
router.post("/books", authCheck, list);
router.post("/book", authCheck, adminCheck, create);
router.get("/book/:slug", authCheck, read);
router.put("/book/:slug", authCheck, update);
router.delete("/book/:slug", authCheck, adminCheck, remove);

module.exports = router;

const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  list,
  create,
  read,
  update,
  remove,
} = require("../controllers/savings");

// endpoints routes
router.post("/savings", list);
router.post("/saving", create);
router.get("/saving/:slug", read);
router.put("/saving/:slug", update);
router.delete("/saving/:slug", remove);

module.exports = router;

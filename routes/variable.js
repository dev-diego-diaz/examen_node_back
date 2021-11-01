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
} = require("../controllers/variableExpenses");

// endpoints routes
router.post("/variables", list);
router.post("/variable", create);
router.get("/variable/:slug", read);
router.put("/variable/:slug", update);
router.delete("/variable/:slug", remove);

module.exports = router;

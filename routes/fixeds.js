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
} = require("../controllers/fixedExpenses");

// endpoints routes
router.post("/fixeds", list, authCheck);
router.post("/fixed", create, authCheck);
router.get("/fixed/:slug", read);
router.put("/fixed/:slug", update);
router.delete("/fixed/:slug", remove);

module.exports = router;

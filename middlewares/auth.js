const admin = require("../firebase");
const User = require("../models/user");

// middlewares functions
exports.authCheck = async (req, res, next) => {
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);

    req.user = firebaseUser;
    next();
  } catch (err) {
    res.status(401).json({
      err: "Token no válido o caducado",
    });
  }
};

exports.adminCheck = async (req, res, next) => {
  const { email } = req.user;

  const adminUser = await User.findOne({ email }).exec();

  if (adminUser.role !== "admin") {
    res.status(403).json({
      err: "Recurso de administrador. Acceso denegado",
    });
  } else {
    next();
  }
};

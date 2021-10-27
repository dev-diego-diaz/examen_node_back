// Framework Node
const express = require("express");

// ORM Mongo
const mongoose = require("mongoose");

// Monitoreo de Endpoints (Status, cuanto se demora encargar endpoints, etc)
const morgan = require("morgan");

// Comunicación cruzada entre dominios
const cors = require("cors");

// Permite lectura y acceso a directorios
const { readdirSync } = require("fs");

// Permite acceder a variables .env
require("dotenv").config();

// Crea app en express
const app = express();

// DB

// Drivers para comunicación
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

// middlewares [Entre petición y server]
// comment this line for production or uninstall
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(cors());

// routes middlewares (Utilizo map para recorrer todas las rutas desde un archivo externo)
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

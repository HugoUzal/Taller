const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
const authRoutes = require("./routes/auth");
const turnoRoutes = require("./routes/turnos");

app.use("/api", authRoutes);
app.use("/api", turnoRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB conectado");
  app.listen(3001, () => console.log("Servidor corriendo en http://localhost:3001"));
})
.catch(err => console.error("Error al conectar MongoDB:", err));

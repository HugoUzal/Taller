const express = require("express");
const router = express.Router();
const Turno = require("../models/Turno");

// Crear turno
router.post("/turnos", async (req, res) => {
  const { fecha, descripcion, userId } = req.body;
  try {
    const turno = new Turno({ fecha, descripcion, userId });
    await turno.save();
    res.status(201).json({ message: "Turno creado" });
  } catch (err) {
    res.status(400).json({ error: "Error al guardar turno" });
  }
});

// Obtener turnos por usuario
router.get("/turnos/:userId", async (req, res) => {
  try {
    const turnos = await Turno.find({ userId: req.params.userId });
    res.json(turnos);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener turnos" });
  }
});

module.exports = router;

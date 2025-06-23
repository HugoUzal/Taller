const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Registro
router.post("/register", async (req, res) => {
  const { nombre, email, password } = req.body;
  try {
    const user = new User({ nombre, email, password });
    await user.save();
    res.status(201).json({ message: "Usuario creado" });
  } catch (err) {
    res.status(400).json({ error: "Error al registrar usuario" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }
    res.json({ message: "Login exitoso", userId: user._id });
  } catch (err) {
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
});

module.exports = router;

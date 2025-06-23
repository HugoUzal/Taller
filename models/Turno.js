const mongoose = require("mongoose");

const turnoSchema = new mongoose.Schema({
  fecha: String,
  descripcion: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model("Turno", turnoSchema);

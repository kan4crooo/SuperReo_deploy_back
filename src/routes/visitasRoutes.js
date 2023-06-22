const { Router } = require("express");
const Visitas = require("../models/visitas");

const visitRoutes = Router();

// Ruta para obtener las visitas diarias
visitRoutes.get("/diarias", async (req, res) => {
  try {
    // Lógica para obtener las visitas diarias
    const visitasDiarias = await Visitas.find({}).select("fecha visitasDiarias -_id");
    res.json(visitasDiarias);
  } catch (error) {
    console.error(error.mensaje);
    res.status(500).json({ mensaje: "Error al obtener las visitas diarias" });
  }
});

// Ruta para obtener las visitas mensuales
visitRoutes.get("/mensuales", async (req, res) => {
  try {
    // Lógica para obtener las visitas mensuales
    const visitasMensuales = await Visitas.find({}).select("mes visitasMensuales -_id");
    res.json(visitasMensuales);
  } catch (error) {
    console.error(error.mensaje);
    res.status(500).json({ mensaje: "Error al obtener las visitas mensuales" });
  }
});

// Ruta para obtener las visitas totales
visitRoutes.get("/totales", async (req, res) => {
  try {
    // Lógica para obtener las visitas totales
    const visitasTotales = await Visitas.find({}).select("visitasTotales -_id");
    res.json(visitasTotales);
  } catch (error) {
    console.error(error.mensaje);
    res.status(500).json({ mensaje: "Error al obtener las visitas totales" });
  }
});

module.exports = visitRoutes;
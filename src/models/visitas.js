const { Schema, model }= require("mongoose");

const userSchema= new Schema({
    dia: {
        type: Date,
        required: true,
        unique: true,
      },
      visitasDia: {
        type: Number,
        default: 0,
      },
      visitasSemana: {
        type: Number,
        default: 0,
      },
      visitasMes: {
        type: Number,
        default: 0,
      },
      visitasTotales: {
        type: Number,
        default: 0,
      },   
});

const Visitas= model("visitas", userSchema)

module.exports= Visitas;
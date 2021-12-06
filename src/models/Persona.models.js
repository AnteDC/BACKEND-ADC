const mongoose = require('mongoose')
const Schema = mongoose.Schema



const VacunadosSchema= new Schema({
 
    nombres:{type:String, required:[true,'Nombre obligatorio']},
    apellidos:String,
    direccion:String,
    celular:Number,
    estadoServicio:String,
    servicioSolicitado:String,
    ciudadNombre:String,
    date:{type:Date,default:Date.now}

})

module.exports= mongoose.model('vacunados',VacunadosSchema)
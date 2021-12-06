const mongoose = require('mongoose')
const Schema = mongoose.Schema



const ServiciosSchema= new Schema({
 
    nombre:{type:String, required:[true,'Nombre obligatorio']},
    precio:Number,
    categoria:String,
    prestador:String,
    ciudadNombre:String,
    date:{type:Date,default:Date.now}

})

module.exports= mongoose.model('servicios',ServiciosSchema)
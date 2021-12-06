const PersonaCtrl={}
const Persona = require('../models/Persona.models')


PersonaCtrl.crear= async(req,res)=>{

    const {nombres,apellidos,direccion,celular,estadoServicio,servicioSolicitado,ciudadNombre}= req.body
    const NuevaPersona= new Persona({

    nombres,
    apellidos,
    direccion,
    celular,
    estadoServicio,
    servicioSolicitado,
    ciudadNombre

    })

    const respuesta = await NuevaPersona.save()
    res.json({

        mensaje: 'Cliente creado',
        respuesta


    })


}

PersonaCtrl.listar= async(req,res)=>{
    const respuesta = await Persona.find()
    res.json(respuesta)
}

   PersonaCtrl.listarId= async(req,res)=>{
    const id = req.params.id
    const respuesta = await Persona.findById({_id: id})
    res.json(respuesta)
}

PersonaCtrl.personaDeUnaCiudad= async(req,res)=>{

    const id = req.params.id
    const respuesta = await Persona.find({ciudad:id})
    res.json(respuesta)
}

PersonaCtrl.eliminar= async (req,res)=>{
    const id = req.params.id
    await Persona.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'cliente eliminada'
    })
}


PersonaCtrl.actualizar= async (req,res)=>{
    const id = req.params.id
    await Persona.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: 'Cliente actualizado'
    })
}

PersonaCtrl.buscarPersonaCriterio= async(req,res)=>{
 const estadoVacuna= req.params.criterio;

 try{
     const respuesta = await Persona.find({estadoServicio:estadoServicio})
     res.json(respuesta)


 }catch(error){

    return res.status(400).json({
        mensaje:'Ocurrio un error',
        error
    })


 }

}




module.exports= PersonaCtrl

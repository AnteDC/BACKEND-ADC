const ServicioCtrl={}
const Servicio = require('../models/Servicio.models')


ServicioCtrl.crear= async(req,res)=>{

    const {nombre,precio,categoria,prestador, ciudadNombre}= req.body
    const NuevoServicio= new Servicio({

    nombre,
    precio,
    categoria,
    prestador,
    ciudadNombre
   

    })

    const respuesta = await NuevoServicio.save()
    res.json({

        mensaje: 'Servicio creado',
        respuesta


    })


}

ServicioCtrl.listar= async(req,res)=>{
    const respuesta = await Servicio.find()
    res.json(respuesta)
}

   ServicioCtrl.listarId= async(req,res)=>{
    const id = req.params.id
    const respuesta = await Servicio.findById({_id: id})
    res.json(respuesta)
}

ServicioCtrl.servicioDeUnaCiudad= async(req,res)=>{

    const id = req.params.id
    const respuesta = await Servicio.find({ciudad:id})
    res.json(respuesta)
}

ServicioCtrl.eliminar= async (req,res)=>{
    const id = req.params.id
    await Servicio.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Servicio eliminado'
    })
}


ServicioCtrl.actualizar= async (req,res)=>{
    const id = req.params.id
    await Servicio.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: 'Servicio actualizado'
    })
}

ServicioCtrl.buscarServicioCriterio= async(req,res)=>{
 const estadoVacuna= req.params.criterio;

 try{
     const respuesta = await Servicio.find({estadoServicio:estadoServicio})
     res.json(respuesta)


 }catch(error){

    return res.status(400).json({
        mensaje:'Ocurrio un error',
        error
    })


 }

}


module.exports= ServicioCtrl

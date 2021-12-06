const {Router}= require('express')
const router = Router()
const ServicioCtrl = require('../controller/Servicio.controller')
const Auth = require('../helper/Auth')


router.post('/crear',Auth.verificarToken, ServicioCtrl.crear)
router.get('/listarServicios',Auth.verificarToken,ServicioCtrl.listar)
router.get('/listar/:id',Auth.verificarToken,ServicioCtrl.listarId)
router.get('/listarCriterio/:criterio',Auth.verificarToken,ServicioCtrl.buscarServicioCriterio)
router.delete('/eliminar/:id',Auth.verificarToken,ServicioCtrl.eliminar)
router.put('/actualizar/:id',Auth.verificarToken,ServicioCtrl.actualizar)
router.get('/listarServiciosCiudad/:id',Auth.verificarToken,ServicioCtrl.servicioDeUnaCiudad)


module.exports = router
const express=require('express');
const router= express.Router();

const codigoController=require('../Controllers/codigoController');

router.post('/',codigoController.crearCodigo);
router.get('/',codigoController.obtenerCodigos);
router.get('/:id',codigoController.obtenerCodigo);
router.put('/:id',codigoController.actualizarCodigo);

module.exports=router;
const express=require('express');
const router= express.Router();

const productoController=require('../Controllers/productoController');

router.post('/',productoController.crearProducto);
router.get('/',productoController.obtenerProductos);
router.get('/:id',productoController.obtenerProducto);
router.put('/:id',productoController.actualizarProducto);

module.exports=router;
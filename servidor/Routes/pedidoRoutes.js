const express=require('express');
const router= express.Router();

const pedidoController=require('../Controllers/pedidoController');

router.post('/',pedidoController.crearPedido);
router.get('/',pedidoController.obtenerPedidos);
router.get('/:id',pedidoController.obtenerPedido);
router.put('/:id',pedidoController.actualizarPedido);

module.exports=router;
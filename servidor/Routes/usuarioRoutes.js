const express=require('express');
const router= express.Router();

const usuarioController=require('../Controllers/usuarioController');

router.post('/',usuarioController.crearUsuario);
router.get('/',usuarioController.obtenerUsuarios);
router.get('/:id',usuarioController.obtenerUsuario);
router.put('/:id',usuarioController.actualizarUsuario);

module.exports=router;
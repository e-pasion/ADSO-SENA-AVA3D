const express=require('express');
const router= express.Router();

const colorController=require('../Controllers/colorController');

router.post('/',colorController.crearColor);
router.get('/',colorController.obtenerColores);
router.get('/:id',colorController.obtenerColor);
router.put('/:id',colorController.actualizarColor);

module.exports=router;
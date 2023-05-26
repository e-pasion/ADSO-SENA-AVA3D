const express=require('express');
const router= express.Router();

const materialController=require('../Controllers/materialController');

router.post('/',materialController.crearMaterial);
router.get('/',materialController.obtenerMateriales);
router.get('/:id',materialController.obtenerMaterial);
router.put('/:id',materialController.actualizarMaterial);

module.exports=router;
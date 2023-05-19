const Material= require('../Models/Material');

exports.crearMaterial= async(req,res)=>{
    try{
        let material;
        material= new Material(req.body);
        await material.save();
        res.send(material);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.obtenerMateriales= async(req,res)=>{
    try{
        const material= await Material.find();
        res.json(material);
    }catch(error){
        console.log(error);
        res.satus(500).send('Error');
    }
}

exports.obtenerMaterial= async (req,res)=>{
    try{
        let material= await Material.findById(req.params.id);
        if (!material){
            res.status(404).send('El material no existe');
        }
        res.json(material);
    }
    catch(error){
        console.log(error)
        res.status(500).send('Error')
    }
}

exports.actualizarColor= async (req,res) =>{
    try{
        const {nombre,codigo,estado}=req.body;
        let material= await Material.findById(req.params.id);
        if (!material){
            res.status(404).send('El material no existe');
        }
        material.nombre=nombre;
        material.codigo=codigo;
        material.estado=estado;

        material=await Material.findOneAndUpdate(
            {_id:req.params.id},material,{new:true})
        res.json(material);
        
    } catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.eliminarColor= async (req,res)=>{
    try{
        let material= await Material.findById(req.params.id);
        if(!material){
            res.status(404).send('El material no existe');
        }
        await Cliente.findByIdAndRemove({_id:req.params.id});
        res.json({
            msg:`Material ${material.nombre} eliminado`
        })
    }catch(error){
        console.error(error);
        res.status(500).send('Error')
    }
}
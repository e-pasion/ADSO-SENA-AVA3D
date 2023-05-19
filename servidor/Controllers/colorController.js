const Color= require('../Models/Color');

exports.crearColor= async(req,res)=>{
    try{
        let color;
        color= new Color(req.body);
        await color.save();
        res.send(color);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.obtenerColores= async(req,res)=>{
    console.log("prueba")
    try{
        const color= await Color.find();
        res.json(color);
    }catch(error){
        console.log(error);
        res.satus(500).send('Error');
    }
}

exports.obtenerColor= async (req,res)=>{
    try{
        let color= await Color.findById(req.params.id);
        if (!color){
            res.status(404).send('El color no existe');
        }
        res.json(color);
    }
    catch(error){
        console.log(error)
        res.status(500).send('Error')
    }
}

exports.actualizarColor= async (req,res) =>{
    try{
        const {nombre,codigo,estado}=req.body;
        let color= await Color.findById(req.params.id);
        if (!color){
            res.status(404).send('El color no existe');
        }
        color.nombre=nombre;
        color.codigo=codigo;
        color.estado=estado;

        color=await Color.findOneAndUpdate(
            {_id:req.params.id},color,{new:true})
        res.json(color);
        
    } catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.eliminarColor= async (req,res)=>{
    try{
        let color= await Color.findById(req.params.id);
        if(!color){
            res.status(404).send('El color no existe');
        }
        await Cliente.findByIdAndRemove({_id:req.params.id});
        res.json({
            msg:`Color ${color.nombre} eliminado`
        })
    }catch(error){
        console.error(error);
        res.status(500).send('Error')
    }
}
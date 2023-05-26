const Codigo = require('../Models/Codigo');

exports.crearCodigo= async(req,res)=>{
    try{
        let codigo= new Codigo(req.body);
        await codigo.save();
        res.send(codigo);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.obtenerCodigos= async(req,res)=>{
    try{
        const codigo= await Codigo.find();
        res.json(codigo);
    }catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.obtenerCodigo= async (req,res)=>{
    try{
        let codigo = await Codigo.findById(req.params.id);
        if (!codigo){
            res.status(404).send('El codigo no existe');
        }
        res.json(codigo);
    }
    catch(error){
        console.log(error)
        res.status(500).send('Error')
    }
}

exports.actualizarCodigo= async (req,res) =>{
    try{
        const {clave,fechaInicio,fechaFinal,descuento,estado}=req.body;
        let codigo= await Codigo.findById(req.params.id);
        if (!codigo){
            res.status(404).send('El codigo no existe');
        }


        codigo.clave=clave;
        codigo.fechaInicio=fechaInicio;
        codigo.fechaFinal=fechaFinal;
        codigo.descuento=descuento;
        codigo.estado=estado;


        codigo=await Codigo.findOneAndUpdate(
            {_id:req.params.id},codigo,{new:true})
        res.json(codigo);
        
    } catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

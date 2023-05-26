const Pedido = require('../Models/Pedido');

exports.crearPedido= async(req,res)=>{
    try{
        let pedido= new Pedido(req.body);
        await pedido.save();
        res.send(pedido);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.obtenerPedidos= async(req,res)=>{
    try{
        const pedido= await Pedido.find();
        res.json(pedido);
    }catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.obtenerPedido= async (req,res)=>{
    try{
        let pedido = await Pedido.findById(req.params.id);
        if (!pedido){
            res.status(404).send('El pedido no existe');
        }
        res.json(pedido);
    }
    catch(error){
        console.log(error)
        res.status(500).send('Error')
    }
}

exports.actualizarPedido= async (req,res) =>{
    try{
        const {usuario,fecha,productos,precio,estado}=req.body;
        let pedido= await Pedido.findById(req.params.id);
        if (!pedido){
            res.status(404).send('El pedido no existe');
        }

      
        pedido.usuario=usuario;
        pedido.fecha=fecha;
        pedido.productos=productos;
        pedido.precio=precio;
        pedido.estado=estado;


        pedido=await Pedido.findOneAndUpdate(
            {_id:req.params.id},pedido,{new:true})
        res.json(pedido);
        
    } catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

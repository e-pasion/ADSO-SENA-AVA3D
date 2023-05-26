const Producto = require('../Models/Producto');

exports.crearProducto= async(req,res)=>{
    try{
        let producto= new Producto(req.body);
        await producto.save();
        res.send(producto);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.obtenerProductos= async(req,res)=>{
    try{
        const producto= await Producto.find();
        res.json(producto);
    }catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.obtenerProducto= async (req,res)=>{
    try{
        let producto = await Producto.findById(req.params.id);
        if (!producto){
            res.status(404).send('El producto no existe');
        }
        res.json(producto);
    }
    catch(error){
        console.log(error)
        res.status(500).send('Error')
    }
}

exports.actualizarProducto= async (req,res) =>{
    try{
        const {color,relleno,tamano,volumen,estado}=req.body;
        let producto= await Producto.findById(req.params.id);
        if (!producto){
            res.status(404).send('El producto no existe');
        }
      
        producto.color=color;
        producto.relleno=relleno;
        producto.tamano=tamano;
        producto.volumen=volumen;
        producto.estado=estado;

        producto=await Producto.findOneAndUpdate(
            {_id:req.params.id},producto,{new:true})
        res.json(producto);
        
    } catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

const Usuario = require('../Models/Usuario');

exports.crearUsuario= async(req,res)=>{
    try{
        let usuario= new Usuario(req.body);
        await usuario.save();
        res.send(usuario);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.obtenerUsuarios= async(req,res)=>{
    try{
        const usuario= await Usuario.find();
        res.json(usuario);
    }catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.obtenerUsuario= async (req,res)=>{
    try{
        let usuario = await Usuario.findById(req.params.id);
        if (!usuario){
            res.status(404).send('El usuario no existe');
        }
        res.json(usuario);
    }
    catch(error){
        console.log(error)
        res.status(500).send('Error')
    }
}

exports.actualizarUsuario= async (req,res) =>{
    try{
        const {nombre,user,contrasena,rol,estado}=req.body;
        let usuario= await Usuario.findById(req.params.id);
        if (!usuario){
            res.status(404).send('El usuario no existe');
        }
      
        usuario.nombre=nombre;
        usuario.user=user;
        usuario.contrasena=contrasena;
        usuario.rol=rol;
        usuario.estado=estado;

        usuario=await Usuario.findOneAndUpdate(
            {_id:req.params.id},usuario,{new:true})
        res.json(usuario);
        
    } catch(error){
        console.log(error);
        res.status(500).send('Error');
    }
}

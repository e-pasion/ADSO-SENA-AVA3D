const {model,Schema} = require("mongoose");

const UsuarioSchema= new Schema({
    nombre:{type:String,required:true},
    user:{type:String,required:true},
    contrasena:{type:String,required:true},
    rol:{type:String,required:true},
    estado:{type:Boolean,default:true}
})

module.exports= model("Usuario",UsuarioSchema)
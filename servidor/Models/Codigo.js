const {model,Schema} = require("mongoose");

const CodigoSchema= new Schema({
    clave:{type:String,required:true},
    fechaInicio:{type:Date,required:true},
    fechaFinal:{type:Date,required:true},
    descuento:{type:Number,required:true},
    estado:{type:Boolean,default:true}
})

module.exports= model("Codigo",CodigoSchema)
const {model,Schema} = require("mongoose");

const ColorSchema= new Schema({
    nombre:{type:String,required:true},
    codigo:{type:String,required:true},
    estado:{type:Boolean,default:true}
})

module.exports= model("Color",ColorSchema)
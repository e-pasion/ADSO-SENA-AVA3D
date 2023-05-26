const {model,Schema} = require("mongoose");

const ProductoSchema= new Schema({
    color:{ type: Schema.Types.ObjectId, ref: 'Color', required:true},
    relleno:{type:Number,required:true},
    tamano:{type:Number,required:true},
    volumen:{type:Number,required:true},
    estado:{type:Boolean,default:true}
})

module.exports= model("Producto",ProductoSchema)
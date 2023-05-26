const {model,Schema} = require("mongoose");

const PedidoSchema= new Schema({
    usuario:{ type: Schema.Types.ObjectId, ref: 'Usuario', required:true},
    fecha:{type:Date,required:true},
    productos:[{
        type: Schema.Types.ObjectId,
        ref: 'Producto'
    }],
    precio:{type:Number,required:true},
    estado:{type:String,required:true}
})

module.exports= model("Pedido",PedidoSchema)
const {model,Schema} = require("mongoose");
const Color=require("./Color")

const MaterialSchema= new Schema({
    nombre:{type:String,required:true},
    densidad:{type:Number,required:true},
    precio:{type:Number,required:true},
    colores:[{
        type: Schema.Types.ObjectId,
        ref: 'Color'
    }],
    estado:{type:Boolean,required:true}
})
module.exports=model("Material",MaterialSchema)
const express=require("express");
const cors=require("cors");
const PORT=4000;
const app= express(); 
const db = require("./config/db")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))

//rutas
app.use('/api/colores',require('./Routes/colorRoutes'))
app.use('/api/materiales',require('./Routes/materialRoutes'))
app.use('/api/codigos',require('./Routes/codigoRoutes'))
app.use('/api/pedidos',require('./Routes/pedidoRoutes'))
app.use('/api/productos',require('./Routes/productoRoutes'))
app.use('/api/usuarios',require('./Routes/usuarioRoutes'))






app.listen(PORT,()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
    db();
});
module.exports=app;
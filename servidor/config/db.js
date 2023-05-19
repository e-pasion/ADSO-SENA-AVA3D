const mongoose = require("mongoose");
require('dotenv').config({ path: 'variables.env'});

const MONGO_URL= "mongodb+srv://auth:1234@stlbackend.tns0hoa.mongodb.net/ava3d"



const db = async ()=>{

    try{
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('DB Conectada');

    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports=db;

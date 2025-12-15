const { default: mongoose } = require("mongoose");
const { PUBLIC_DATA } = require("../../constant");

exports.ConnectDB = async()=>{
  try{
    await mongoose.connect(PUBLIC_DATA.mongo_uri)
    console.log(`conexion exitosa en ${mongoose.connection.host}`);
  } catch (error){
    console.log(`falla en la conexion a la bd ${error}`);
    mongoose.disconnect();
    process.exit(1)
  }

}

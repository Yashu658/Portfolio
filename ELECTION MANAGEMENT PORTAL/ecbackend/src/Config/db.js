import mongoose,{connect}from "mongoose";

const connectDB = async() => {
    try{
    const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected",connect.connection.host)
    }
    catch(e){
        console.log("MongoDB not connected")
        console.error(e.message)
        process.exit(1)
    }

}

export default connectDB;
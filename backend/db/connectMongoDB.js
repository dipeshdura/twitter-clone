import mongoose from "mongoose";

export const connectMongoDB =async()=>{
    try {
        const conn =await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MONGODB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connection to mongoDb : ${error.message}`);
        console.log(process.exit(1));
        process.exit(1);
    }
}
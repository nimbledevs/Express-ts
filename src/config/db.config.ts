import mongoose from "mongoose";

const mongodb_uri= process.env.MONGODB_URI as string;

const connectDb= async()=>{
    try {
        await mongoose.connect(mongodb_uri);
        console.log(`[database] :: connected to MongoDB database`);
    } catch (error:any) {
        console.log(`[database] :: failed to connect to MongoDB (${error.message    || error.stack || error || error.stack}`);
    }
}

export default connectDb;
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb+srv://samshot:samshot01@cluster0.wil1cob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
    }
  }

export default connectDB;
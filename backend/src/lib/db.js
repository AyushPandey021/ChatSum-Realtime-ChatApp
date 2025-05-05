import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://vlogayush51:ayush123@cluster0.fpgmte2.mongodb.net/New-chat-DB?retryWrites=true&w=majority&appName=Cluster0`
      // `mongodb+srv://vlogayush51:ayush123@cluster0.fpgmte2.mongodb.net/New-chat-DB?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
  }
};


import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/ai-school"; // MongoDB connection string

mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB!"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

export default mongoose;
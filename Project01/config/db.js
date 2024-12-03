import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDb connected !! DB HOST ${connection.connection.host}`);
  } catch (error) {
    console.log("ERROR: ", error.message);
    process.exit(1);
  }
};

export { connectDb };

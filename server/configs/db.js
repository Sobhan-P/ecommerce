import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("DB connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`);
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDb;

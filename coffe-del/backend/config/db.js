import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://greatstack:32342454@cluster0.laftu1g.mongodb.net/coffe-del').then(()=>console.log("DB Connected"));
}
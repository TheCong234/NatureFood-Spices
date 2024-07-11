import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { CategoryRoutes, ProductRoutes } from "./routes/index.js";
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Mongoose
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("data connected");
})

app.use('/category', CategoryRoutes);
app.use('/product', ProductRoutes);

app.get('/home', (req, res)=>{
    res.send('HOME');
})

app.listen(3000, ()=>{
    const PORT = process.env.PORT || 8888;
    console.log(`SERVER ON PORT: ${PORT}`);
})
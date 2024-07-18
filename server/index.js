import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { CategoryRoutes, ProductRoutes, UserRoutes } from "./routes/index.js";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";

const app = express();
const apiVersion = '/api/v1';
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

//session
const store = MongoStore.create({
    mongoUrl: process.env.DB_URL,
    touchAfter: 24 * 60 * 60,
    crypto:{
    secret: 'thisisasecret'
    }
})
store.on("error", function(e){
    console.log("Session store error", e);
})

const sessionConfig = {
    store,
    name:'session',
    secret: 'thisisasecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 *24 *7,
        maxAge: 1000 * 60 * 60 *24 *7
    }
}

app.use(session(sessionConfig));

//routes
app.use(`${apiVersion}/category`, CategoryRoutes);
app.use(`${apiVersion}/product`, ProductRoutes);
app.use(`${apiVersion}/user`, UserRoutes);


app.get('/home', (req, res)=>{
    res.send('HOME');
})

app.listen(3000, ()=>{
    const PORT = process.env.PORT || 8888;
    console.log(`SERVER ON PORT: ${PORT}`);
})
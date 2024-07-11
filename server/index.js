import express from "express";
import dotenv from 'dotenv';


const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/home', (req, res)=>{
    res.send('HOME');
})

app.listen(3000, ()=>{
    const PORT = process.env.PORT || 8888;
    console.log(`SERVER ON PORT: ${PORT}`);
})
import express from "express";
import urlRoute from './routes/url.js';
import connectToMongoDB from "./connection.js";
import URL from "./models/url.js";
import cors from "cors";
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url').then(console.log(`Connected to MongoDB!`));

app.use(cors({
    origin: "http://localhost:5173",  
    methods: ["GET", "POST"],         
    credentials: true                 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/api/url', urlRoute);

app.listen(PORT, () => console.log(`server started at: ${PORT}`));
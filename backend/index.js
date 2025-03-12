import express from "express";
import urlRoute from './routes/url.js';
import connectToMongoDB from "./connection.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 8001;

connectToMongoDB(process.env.MONGO_URI).then(() => console.log(`Connected to MongoDB Atlas!`));

app.use(cors({
    origin: "https://custom-url-shortner-1.onrender.com",  
    methods: ["GET", "POST"],         
    credentials: true                 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/api/url', urlRoute);

app.listen(PORT, () => console.log(`Server started at: ${PORT}`));

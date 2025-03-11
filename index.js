import express from "express";
import urlRoute from './routes/url.js';
import connectToMongoDB from "./connection.js";
import URL from "./models/url.js";

const app = express();
const PORT = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/url', urlRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({shortId}, 
        {$push: {
            visitHistory: {timeStamp: Date.now(), },
        }, });
        res.redirect(entry.redirectUrl);
});

connectToMongoDB('mongodb://127.0.0.1:27017/short-url').then(console.log(`Connected to MongoDB!`));

app.listen(PORT, () => console.log(`server started at: ${PORT}`));
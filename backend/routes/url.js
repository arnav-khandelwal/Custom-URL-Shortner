import { Router } from "express";
import { generateNewUrl, getAnalytics } from "../controllers/url.js";
import URL from "../models/url.js"
const router = Router();

router.post('/', generateNewUrl);

router.get('/analytics/:shortId', getAnalytics);

router.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        { $push: { visitHistory: { timeStamp: Date.now() } } },
        { new: true }
    );

    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }


    res.json({ redirectUrl: entry.redirectUrl });
});


export default router;


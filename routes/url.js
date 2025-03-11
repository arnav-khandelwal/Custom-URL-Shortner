import { Router } from "express";
import { generateNewUrl, getAnalytics } from "../controllers/url.js";

const router = Router();

router.post('/', generateNewUrl);

router.get('/analytics/:shortId', getAnalytics);

export default router;


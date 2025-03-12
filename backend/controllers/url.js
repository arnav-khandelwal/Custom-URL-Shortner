import {nanoid} from "nanoid";
import URL from '../models/url.js';

async function generateNewUrl(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'url is required'});
    const shortId = nanoid(8);
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
    });

    return res.json({id: shortId});
}

async function getAnalytics(req, res){
    const shortId = req.params.shortId;
    if(shortId === "all"){
        const result = await URL.find({});
        return res.json(result);
    }
    const result = await URL.findOne({shortId});
    return res.json({
        shortId: result.shortId,
        redirectUrl: result.redirectUrl,
        totalClicks: result.visitHistory.length,
        createdAt: result.createdAt
    });
    
}

export {
    generateNewUrl,
    getAnalytics,
};
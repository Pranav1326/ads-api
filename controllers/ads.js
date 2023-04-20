const Ads = require('../models/Ads');

exports.postAd = async (req, res) => {
    const { _id, companyId, primaryText, headline, description, CTA, imageUrl } = req.body;
    try {
        const newAd = new Ads({ _id, companyId, primaryText, headline, description, CTA, imageUrl });
        await newAd.save();
        res.status(200).json(`New Advertisement "${newAd}" registrated.`);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getAd = async (req, res) => {
    const adId = req.params.id;
    try {
        const ad = await Ads.findOne({ _id: adId});
        !ad && res.status(404).json("Not Found!");

        ad && res.status(200).json(ad);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getAds = async (req, res) => {
    try {
        const ads = await Ads.find();
        !ads && res.status(404).json(ads);

        ads && res.status(200).json(ads);
    } catch (error) {
        res.status(500).json(error);
    }
}
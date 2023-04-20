const mongoose = require("mongoose"); 

const adsSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    companyId: {
        type: String,
        required: true
    },
    primaryText: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    CTA: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Ads", adsSchema);

const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_PROFILE}:${process.env.MONGO_PASS}@cluster0.cn8fwgk.mongodb.net/ads?retryWrites=true&w=majority`)
.then(() => {
    console.log(`MongoDB Connected!`);
})
.catch(err =>  {
    console.log("Error Connecting to MongoDB ", err);
});

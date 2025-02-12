const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: {
        type:String,
        required: true,
    },
    description: String,
    image: {
        filename:String,
        url: {
            type:String,
            default: "https://unsplash.com/photos/a-view-of-a-large-building-from-a-window-DbexUC7KreY",
            set:(v)=> v===""?"https://unsplash.com/photos/a-view-of-a-large-building-from-a-window-DbexUC7KreY" : v ,
        }

        
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
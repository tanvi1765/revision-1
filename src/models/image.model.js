const mongoose = require("mongoose");
const config = require("../config/config");

const imagesSchema = new mongoose.Schema(
    {
        img_name: {
            type: String,
            trim: true,
        },
        img_desc: {
            type: String,
            trim: true
        },
        product_image: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.product_image) {
                    data.product_image = `${config.base_url}product_image/${data.product_image}`;
                }
            },
        },
    }
);

const images = mongoose.model("images", imagesSchema);
module.exports = images;
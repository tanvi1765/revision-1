const Joi = require("joi");

const createimage = {
    body: Joi.object().keys({
        img_name: Joi.string().required().trim(),
        img_desc: Joi.string().required().trim(),
        product_image: Joi.string().allow(""),
    })
};

module.exports = {
    createimage
}
const { image } = require("../models");

const createimage = async (reqbody) => {
    return image.create(reqbody);
};

const imageList = async (req, res) => {
    return image.find();
};

const deleteimg = async (imageid) => {
    return image.findByidDelete(imageid);
};

const updateimg = async (imageid, updateBody) => {
    return image.findByidUpdate(imageid, { $set: updateBody });
};

const getimageByid = async (imageid) => {
    return image.findByid(imageid);
}
module.exports = {
    createimage,
    imageList,
    deleteimg,
    updateimg,
    getimageByid
};
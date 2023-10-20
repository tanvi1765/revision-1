const { imageservice } = require("../services");

// create image
const createimage = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        if (req.file) {
            reqBody.product_image = req.file.filename;
        } else {
            throw new Error("image is required");
        }

        const createImage = await imageservice.createimage(reqBody);
        res.status(200).json({
            success: true,
            message: "image create successfully!",
            data: (createImage),
        })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// image list
const imageList = async (req, res) => {
    try {
        const getimage = await imageservice.imageList();

        res.status(200).json({
            success: true,
            message: "image get successfully",
            data: (getimage)
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update image
const updateimg = async (req, res) => {
    try {
        const imageId = req.params.imageId;

        const imageEx = await imageservice.getImageById(imageId);
        if (!imageEx) {
            throw new Error("image not found");
        }
        await imageservice.updateimg(imageId, req.body);
        res.status(200).json({
            success: true,
            message: "image detiles update successfully! "
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete recode
const deleteimg = async (req, res) => {
    try {
        const imageId = req.params.imageId;
        const imageEx = await imageservice.getimageById(imageId);
        if (!imageEx) {
            throw new Error("image not found");
        }
        await imageservice.deleteimg(imageId, req.body);
        res.status(200).json({
            success: true,
            message: "image delete successfully !"
        })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createimage,
    imageList,
    updateimg,
    deleteimg
};
const express = require("express");
const { upload } = require("../middlewares/uplode");
const { imageController } = require("../controllers");
const { imagevalidation } = require("../validations");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/crate-image",
    upload.single("product_image"),
    validate(imagevalidation.createimage),
    imageController.createimage
);

// list
router.get(
    "/list",
    imageController.imageList
);

// delete
router.delete(
    "/delete-img/:imageId",
    imageController.deleteimg
);

// update
router.put(
    "/update-img",
    imageController.updateimg
);

module.exports = router;
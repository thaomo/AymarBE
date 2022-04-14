const express = require('express');

const router = express.Router();

const imageUploadController = require('../controllers/upload');

const downloadController = require('../controllers/file.controller');

//For all image object
router.get('/upload', imageUploadController.getImages);
router.post('/upload', imageUploadController.uploadImages, imageUploadController.newImages);
router.delete('/upoad', imageUploadController.deleteImages);

//For individual image object, search via name
router.get('/upload/:name', imageUploadController.getOneImage);
router.delete('/upoad/:name', imageUploadController.deleteOneImage);


module.exports = router;
//import models
const image = require("../models/upload");

//import multer for uploading images
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadImages = multer({storage: storage}).single('image');

//GET '/upload'
//GET ALL images from the DB
const getImages = (req, res) => {
    image.find({}, (err, data)=> {
        if (err) {
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//POST '/upload'
const newImages = (req, res) => {
    image.findOne({ name: req.body.name }, (err, data) => {

        //check if the data (images) exist in the DB
        //If not, then create new images in the DB
        if (!data) {

            const newImages = new image({
                name: req.body.name,
                image: req.file.path,
                description: req.body.description,
                keywords: req.body.keywords,
                origin: req.body.origin,
            })

            //save images to database
            newImages.save((err, data) => {
                if (err) return res.json({ Error: err });
                return res.json(data);
            })
        }
        else {
            if(err) return res.json(`something went wrong, please try again. ${err}`); //return error
            return res.json({message: "image already exists."}); //object already exist in DB
        }
    })
};

//DElETE '/upload'
//DELETE ALL images in the DB
const deleteImages = (res) => {
    image.deleteMany({}, err => {
        if(err)
        {
            return res.json({message: "Deletion Failed!"});
        }
        return res.json({message: "Deletion completed successfully!"});
    })
};

//GET '/upload:name'
//GET a specific image based on 'name' string
const getOneImage = (req, res) => {

    //Find the specific image with the Sting 'name'
    image.findOne({name: req.params.name}, (err, data) => {
        if(err || !data) //If there's an error or data not found, return error message
        {
            return res.json({message: "Image does not exist."});
        }
        return res.json(data); //Else return the exact data
    });
};

//DELETE '/upload:name'
const deleteOneImage = (req, res) => {

    image.deleteOne({name: req.params.name}, (err, data) => {
        if ( data.deletedCount == 0)
        {
            return res.json({message: "Image does not exist."});
        }
        else if (err)
        {
            return res.json(`Something went wrong, please try again. ${err}`);
        }
        else{
            return res.json({message: "Image deleted."});
        }
    })
};

module.exports = {
    uploadImages,
    getImages,
    newImages,
    deleteImages,
    getOneImage,
    deleteOneImage
};
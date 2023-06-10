// Require the cloudinary library
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const {
    CLOUD_NAME,
    API_KEY,
    API_SECRET,
  } = process.env;
// Return "https" URLs by setting secure: true
cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
  });

// cloudinary.config({
//   secure: true
// });

// Log the configuration
console.log(cloudinary.config());

/////////////////////////
// Uploads an image file
/////////////////////////
// const uploadImage = async (file) => {
//     const options = {
//       use_filename: true,
//       unique_filename: false,
//       overwrite: true,
//       transformation: [
//         { width: 640, height: 640, crop: 'fill' }, // Transformación para ajustar la imagen a 640x640 píxeles
//       { width: 640, height: 640, crop: 'pad', background: 'white' }
//       ]
//     };
  
//     try {
//       const result = await cloudinary.uploader.upload(file.path, options);
//       console.log(result);
//       return result.public_id;
//     } catch (error) {
//       console.error(error);
//     }
//   };
// /////////////////////////////////////
// Gets details of an uploaded image
/////////////////////////////////////
const getAssetInfo = async (publicId) => {

    // Return colors in the response
    const options = {
      colors: true,
    };

    try {
        // Get details about the asset
        const result = await cloudinary.api.resource(publicId, options);
        console.log(result);
        return result.colors;
        } catch (error) {
        console.error(error);
    }
};

//////////////////////////////////////////////////////////////
// Creates an HTML image tag with a transformation that
// results in a circular thumbnail crop of the image  
// focused on the faces, applying an outline of the  
// first color, and setting a background of the second color.
//////////////////////////////////////////////////////////////
const createImageTag = (publicId, ...colors) => {

    // Set the effect color and background color
    const [effectColor, backgroundColor] = colors;

    // Create an image tag with transformations applied to the src URL
    let imageTag = cloudinary.image(publicId, {
      transformation: [
        { width: 640, height: 640, gravity: 'faces', crop: 'thumb' },
        { radius: 'max' },
        { effect: 'outline:10', color: effectColor },
        { background: backgroundColor },
      ],
    });

    return imageTag;
};

//////////////////
//
// Main function
//
//////////////////
(async () => {

    // Set the image to upload
    const imagePath = 'https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg';

    // Upload the image
    const publicId = await uploadImage(imagePath);

    // Get the colors in the image
    const colors = await getAssetInfo(publicId);

    // Create an image tag, using two of the colors in a transformation
    const imageTag = await createImageTag(publicId, colors[0][0], colors[1][0]);

    // Log the image tag to the console
    console.log(imageTag);

})();
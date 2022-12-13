
const fs = require('fs');
const AWS = require('aws-sdk');
require('dotenv').config()


// Enter copied or downloaded access ID and secret key here
const ID = process.env.ACCESS_KEY;
const SECRET = process.env.SECRET_ACCESS_KEY;

// can use fs libaray to upload image
const BUCKET_NAME = process.env.BUCKET_UPLOAD;


const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'yelan.jpg', // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });

};
uploadFile('yelan.jpg');
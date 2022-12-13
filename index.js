const AWS = require('aws-sdk');
const fs = require('fs');
require('dotenv').config()


// Enter copied or downloaded access ID and secret key here
const ID = process.env.ACCESS_KEY;
const SECRET = process.env.SECRET.ACCESS_KEY;

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

// The name of the bucket that you have created
const BUCKET_NAME = process.env.BUCKET_UPLOAD;
const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "us-east-2"
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});


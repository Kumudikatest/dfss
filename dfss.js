const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    debugger;
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: "us-east-1_HdYJb7Znp",
            Limit: 10
        }).promise();
        //console.log(data);

    } catch (err) {
        //console.log(err);
        // error handling goes here
    };
    try {
        let data = await s3.listObjects({
            Bucket: "cloud9-ktest",
            MaxKeys: 10
        }).promise();
//console.log(data);
i=15
if (i < 18) {
  //console.log("Good day");
} else {
  //console.log("Good night")
}

for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};
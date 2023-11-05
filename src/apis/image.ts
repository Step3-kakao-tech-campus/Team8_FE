import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

AWS.config.update({
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
});

const getImageUrl = (imageFile: File | undefined) => {
  if (!imageFile) return '';

  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: process.env.REACT_APP_BUCKET_NAME || '',
      Key: uuidv4() + imageFile.name.replaceAll(' ', ''),
      Body: imageFile,
    },
  });

  return upload
    .promise()
    .then((res) => res.Location)
    .catch((error) => error);
};

export default getImageUrl;

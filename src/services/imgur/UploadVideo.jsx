import axios from 'axios';
import RNFS from 'react-native-fs';

const CLIENT_ID = '57876051c209a77';
const ACCESS_TOKEN = 'ac7a52788de6954605b80dba2a2e310b5ef138d7';

const UploadVideo = async fileDetails => {
  const imgBase64 = RNFS.readFile(fileDetails.uri, 'base64').then(res => {
    console.log('res =>', res);
    return res;
  });
  console.log('Imgbase', imgBase64);
  const formData = new FormData();
  formData.append('image', imgBase64);
  formData.append('name', fileDetails.name);

  return await axios
    .post('https://api.imgur.com/3/image', formData, {
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
        // Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then(res => {
      console.log('image data', res.data);
      return res.data;
    })
    .catch(error => console.log('error =>', error));

  // Fetch
  // var myHeaders = new Headers();
  // myHeaders.append('Authorization', `Client-ID ${CLIENT_ID}`);

  // var formdata = new FormData();
  // formdata.append('image', imgBase64);
  // formData.append('name', fileDetails.name);

  // var requestOptions = {
  //   method: 'POST',
  //   headers: myHeaders,
  //   body: formdata,
  // };

  // await fetch('https://api.imgur.com/3/image', requestOptions)
  //   .then(response => response.json())
  //   .then(result => console.log("result: ", result))
  //   .catch(error => console.log('error: ', error));
};

export {UploadVideo};

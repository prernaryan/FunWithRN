import ImagePicker from 'react-native-image-crop-picker';

const openCamera = (index, cb) => {
  let myAction;

  if (index === 1) {
    myAction = ImagePicker.openPicker;
  } else {
    myAction = ImagePicker.openCamera;
  }

  const options = {
    width: 1000,
    height: 950,
    cropping: true,
    compressImageQuality: 0.5,
  };

  myAction(options)
    .then(image => {
      cb(image);
    })
    .catch(error => {
      // Handle any errors here
      console.error('ImagePicker error:', error);
    });
};

export default openCamera;

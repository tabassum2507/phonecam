import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import ImagePreview from './imagePreview'; 
function PhoneCam (props) {
  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  return (
    <Camera
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
    />
  );
}



export default PhoneCam
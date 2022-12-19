import {View, Image, Button, Platform} from 'react-native';
import React from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {styles} from './styles';
import ImagePicker from 'react-native-image-crop-picker';

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};

const UploadAuthorPhoto = () => {
  return (
    <View>
      <Text>UploadAuthorPhoto</Text>
    </View>
  );
};

export default UploadAuthorPhoto;

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Tabs = props => {
  const {onPress, WrapperStyle, text, headingStyle} = props;

  return (
    <>
      <TouchableOpacity style={WrapperStyle} onPress={onPress}>
        <Text style={headingStyle}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};
export default Tabs;

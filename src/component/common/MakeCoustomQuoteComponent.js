import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {CommonStyles} from '../../styles/CommonStyles';
import {styles} from './styles';

const MakeCoustomQuoteComponent = () => {
  const [color, setColor] = useState(['#B636D3', '#5F21A0']);
  return (
    <View>
      <View style={CommonStyles.spaceBetween}>
        <TouchableOpacity onPress={() => setColor(['#C6FFDD'])}>
          <View colors={['#C6FFDD']} style={styles.selectColorView} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setColor(['#0F2027'])}>
          <View colors={['#0F2027']} style={styles.selectColorView} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setColor(['#12c2e9'])}>
          <View colors={['#12c2e9']} style={styles.selectColorView} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MakeCoustomQuoteComponent;

import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import GoBackHeader from '../common/GoBackHeader';
import {Images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';
import {s, vs} from 'react-native-size-matters';

const DATA = [
  {
    id: '0',
    templateImag: Images.templateScreen1,
  },
  {
    id: '1',
    templateImag: Images.templateScreen2,
  },
  {
    id: '2',
    templateImag: Images.templateScreen3,
  },
  {
    id: '3',
    templateImag: Images.templateScreen4,
  },
  {
    id: '4',
    templateImag: Images.templateScreen5,
  },
  {
    id: '5',
    templateImag: Images.templateScreen6,
  },
  {
    id: '6',
    templateImag: Images.templateScreen7,
  },
  {
    id: '7',
    templateImag: Images.templateScreen8,
  },
];

const TemplatesComponent = () => {
  const navigation = useNavigation();

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.allCatrgoriesFlatLisView}
        onPress={() => {
          item.id == 0
            ? navigation.navigate('HomeScnTemplateScreen1')
            : item.id == 1
            ? navigation.navigate('HomeScnTemplateScreen2')
            : item.id == 2
            ? navigation.navigate('HomeScnTemplateScreen3')
            : item.id == 3
            ? navigation.navigate('HomeScnTemplateScreen4')
            : item.id == 4
            ? navigation.navigate('HomeScnTemplateScreen5')
            : item.id == 5
            ? navigation.navigate('HomeScnTemplateScreen6')
            : item.id == 6
            ? navigation.navigate('HomeScnTemplateScreen7')
            : item.id == 7
            ? navigation.navigate('HomeScnTemplateScreen8')
            : null;
        }}>
        <Image style={styles.templateScreenImage} source={item.templateImag} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.templateScreenMainView}>
      <SafeAreaView style={styles.goBackHeaderFlax}>
        <GoBackHeader />
        <Text style={styles.goBackHeaderTitle}>Templates</Text>
      </SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: s(14),
          paddingBottom: vs(30),
        }}
        numColumns={2}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        key={item => item.id}
      />
    </View>
  );
};

export default TemplatesComponent;

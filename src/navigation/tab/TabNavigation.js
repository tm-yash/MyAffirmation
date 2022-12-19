import {View, Image, Platform, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import {Images} from '../../utils/Images';
import {ms, vs} from 'react-native-size-matters';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import ImageCollectionScreen from '../../screens/ImageCollectionScreen';
import GalleryScreen from '../../screens/GalleryScreen';
import SettingScreen from '../../screens/SettingScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <Pressable
    style={{
      top: Platform.OS === 'ios' ? 0 : -25,
      justifyContent: 'center',
      alignItem: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: ms(55),
        height: ms(55),
        borderRadius: 35,
        backgroundColor: '#AA67DD',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={Images.addIcon}
        resizeMode={'contain'}
        style={{
          height: ms(25),
          width: ms(25),
          resizeMode: 'contain',
        }}
      />
    </View>
  </Pressable>
);

export default function TabNavigation() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {...styles.tabBar},
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: Platform.OS === 'ios' ? vs(0) : vs(25),
          paddingBottom: Platform.OS === 'ios' ? vs(60) : vs(30),
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
          backgroundColor: '#292D32',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          tabBarIcon: ({focused, color, size}) => (
            <>
              <Image
                source={focused ? Images.homeFillIcon : Images.homeStrokeIcon}
                resizeMode={'contain'}
                style={{
                  height: ms(25),
                  width: ms(25),
                  resizeMode: 'contain',
                  marginTop: Platform.OS === 'ios' ? vs(60) : vs(0),
                }}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={{
          title: '',
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({focused, color, size}) => (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate('SettingScreen')}
                source={Images.addIcon}
                resizeMode="contain"
                style={{
                  height: ms(30),
                  width: ms(30),
                }}></TouchableOpacity>
            </>
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={SettingScreen}
        options={{
          title: '',
          tabBarIcon: ({focused, color, size}) => (
            <>
              <Image
                size={size ? size : 24}
                color={focused ? color : '#222222'}
                focused={focused}
                source={focused ? Images.settingFill : Images.appSettingIcon}
                resizeMode={'contain'}
                style={{
                  tintColor: '#ffffff',
                  height: ms(25),
                  width: ms(25),
                  resizeMode: 'contain',
                  marginTop: Platform.OS === 'ios' ? vs(60) : vs(0),
                }}
              />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

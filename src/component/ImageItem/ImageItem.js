import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {Images} from '../../utils/Images';
import {captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';
import {HitSlop, INTER_AD_ID} from '../../utils/Constant';
import CameraRoll from '@react-native-community/cameraroll';
import {Colors} from '../../styles/Colors';
import {isTablet} from 'react-native-device-info';
import {vs} from 'react-native-size-matters';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {showToast} from '../CommonItem/ToastMsg/ToastMsg';
import FastImage from 'react-native-fast-image';
import {SkeltonScreen} from '../../screens/SkeltonScreen';
import {styles} from './styles';

export function ImageItem({item, index, length}) {
  const _containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const eventListener = interstitial.onAdEvent(type => {
  //     if (type === AdEventType.LOADED) {
  //       interstitial.load();
  //       setLoaded(true);
  //     }
  //     if (type === AdEventType.OPENED) {
  //       setLoaded(false);
  //     }
  //     if (type === AdEventType.CLOSED) {
  //       interstitial.load();
  //       setLoaded(false);
  //     }
  //   });
  //   interstitial.load();
  //   return () => {
  //     eventListener();
  //   };
  // }, []);

  const handleShare = () => {
    setTimeout(async () => {
      if (_containerRef) {
        try {
          const uri = await captureRef(_containerRef, {
            format: 'jpg',
            quality: 1,
          });
          console.log('->>>>>', uri);
          await Share.open({
            url: uri,
          });
        } catch (e) {
          if (e.error !== 'User did not share') {
            console.log(
              'We are so sorry, but something unexpected happened :(',
            );
          }
        }
      }
    }, 1000);
  };
  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Image Download Permission',
          message: 'Your permission is required to save images to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        '',
        'Your permission is required to save images to your device',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } catch (err) {
      console.log('err', err);
    }
  };
  const downloadImage = async () => {
    setTimeout(async () => {
      try {
        const uri = await captureRef(_containerRef, {
          format: 'jpg',
          quality: 1,
        });
        console.log('-------->', uri);
        if (Platform.OS === 'android') {
          const granted = await getPermissionAndroid();
          if (!granted) {
            return;
          }
        }
        const image = CameraRoll.save(uri, 'photo');
        if (image) {
          showToast('save image successfully.');
        }
      } catch (error) {
        console.log('error', error);
      }
    }, 1000);
    // setTimeout(async () => {
    //   interstitial.show();
    // });
  };
  const onLoadStart = () => {
    setLoaded(true);
    if (loaded === true) {
      <SkeltonScreen />;
    }
    setLoaded(false);
  };
  const onLoadEnd = () => {
    setLoaded(false);
  };
  return (
    <>
      {item && (
        <View key={item._id}>
          <View ref={_containerRef}>
            {!loaded ? (
              <FastImage
                source={{uri: item.image[0]}}
                onLoadStart={onLoadStart}
                onLoadEnd={onLoadEnd}
                resizeMode={FastImage.resizeMode.cover}
              />
            ) : (
              <SkeltonScreen />
            )}
          </View>
        </View>
      )}

      <View>
        {length - 1 === index ? (
          <View />
        ) : (
          <Text>{'Swipe-up for more images!'}</Text>
        )}
        <TouchableOpacity hitSlop={HitSlop} onPress={handleShare}>
          <Image source={Images.shareIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={HitSlop}
          style={[
            styles.shareContainer,
            {
              right: isIphoneX()
                ? vs(85)
                : vs(0) || isTablet()
                ? vs(100)
                : vs(80),
            },
          ]}
          onPress={downloadImage}>
          <Image source={Images.download} />
        </TouchableOpacity>
      </View>
    </>
  );
}

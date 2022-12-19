import {
  View,
  Dimensions,
  Text,
  SafeAreaView,
  Image,
  Share,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {styles} from './styles';
import {Images} from '../../utils/Images';
import FastImage from 'react-native-fast-image';
import {CommonStyles} from '../../styles/CommonStyles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Template1Skeleton} from '../skelton/SkeltonComponent';

const ITEM_HEIGHT = Dimensions.get('window').height;

const TemplatePreview8 = () => {
  const [Template1, setTemplate1] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const route = useRoute();

  var authorImage = route?.params?.authorImage;
  var authorQuote = route?.params?.authorQuote;
  var authorName = route?.params?.authorName;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {loading ? (
        <Template1Skeleton />
      ) : (
        <View>
          <View
            style={[CommonStyles.spaceBetween, CommonStyles.goBackHeaderView]}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[CommonStyles.center, styles.goBackIconBorder]}>
              <Image style={{tintColor: '#000'}} source={Images.goBackButton} />
            </TouchableOpacity>
          </View>
          <View style={CommonStyles.quoteOfTHeDayScreen}>
            <Image style={styles.bgObject1} source={Images.reelOvalGray1} />
            <ImageBackground
              style={styles.yellowBackground}
              source={Images.yellowBackground}>
              <View style={CommonStyles.quoteViewStyle}>
                <View style={styles.authorInfo}>
                  <Image style={styles.authorImag} source={authorImage} />
                  <Text style={styles.quoteStyles}>{authorQuote}</Text>
                  <View style={styles.authorNameView}>
                    <Text style={styles.authorName}>{authorName}</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <Image style={styles.bgObject2} source={Images.reelOvalGray2} />
            <View style={CommonStyles.footer}>
              <SafeAreaView style={CommonStyles.spaceBetween}>
                <View style={CommonStyles.center}>
                  <TouchableOpacity
                    style={[
                      CommonStyles.center,
                      styles.QuoteFoThaDayFooterBorder,
                    ]}>
                    <Image
                      style={{tintColor: '#000'}}
                      source={Images.download}
                    />
                  </TouchableOpacity>
                  <Text style={styles.footerIconText}>Download</Text>
                </View>
                <View style={CommonStyles.center}>
                  <TouchableOpacity
                    onPress={onShare}
                    style={[
                      CommonStyles.center,
                      styles.QuoteFoThaDayFooterBorder,
                    ]}>
                    <Image style={{tintColor: '#000'}} source={Images.share} />
                  </TouchableOpacity>
                  <Text style={styles.footerIconText}>Share</Text>
                </View>
              </SafeAreaView>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default TemplatePreview8;

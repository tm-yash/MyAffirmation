import {
  View,
  Dimensions,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Share,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../../utils/Images';
import {FetchAllQuote} from '../../actions/Quotes';
import FastImage from 'react-native-fast-image';
import {CommonStyles} from '../../styles/CommonStyles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Template1Skeleton} from '../skelton/SkeltonComponent';

const ITEM_HEIGHT = Dimensions.get('window').height;

const TemplatePreview6 = () => {
  const [Template1, setTemplate1] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const route = useRoute();

  var authorImage = route?.params?.authorImage;
  var authorQuote = route?.params?.authorQuote;
  var authorName = route?.params?.authorName;
  var color = route?.params?.color;

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
        <LinearGradient colors={color}>
          <View
            style={[CommonStyles.spaceBetween, CommonStyles.goBackHeaderView]}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[CommonStyles.center, CommonStyles.goBackIconBorder]}>
              <Image
                style={{tintColor: '#ffffff'}}
                source={Images.goBackButton}
              />
            </TouchableOpacity>
          </View>
          <View style={CommonStyles.quoteOfTHeDayScreen}>
            <View style={CommonStyles.quoteViewStyle}>
              <View style={styles.authorInfo}>
                <Text style={styles.quoteStyles}>{authorQuote}</Text>
                <View style={styles.authorNameView}>
                  <Image style={styles.authorImag} source={authorImage} />
                  <Text style={styles.authorName}>{authorName}</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.bgObject1}
              source={Images.homeScreenTemplate6Image}
            />
            <View style={CommonStyles.footer}>
              <SafeAreaView
                style={[CommonStyles.spaceBetween, styles.QuoteFoThaDayFooter]}>
                <View style={CommonStyles.center}>
                  <TouchableOpacity
                    style={[
                      CommonStyles.center,
                      CommonStyles.QuoteFoThaDayFooterBorder,
                    ]}>
                    <Image
                      style={{tintColor: '#ffffff'}}
                      source={Images.download}
                    />
                  </TouchableOpacity>
                  <Text style={CommonStyles.footerIconText}>Download</Text>
                </View>
                <View style={CommonStyles.center}>
                  <TouchableOpacity
                    onPress={onShare}
                    style={[
                      CommonStyles.center,
                      CommonStyles.QuoteFoThaDayFooterBorder,
                    ]}>
                    <Image
                      style={{tintColor: '#ffffff'}}
                      source={Images.share}
                    />
                  </TouchableOpacity>
                  <Text style={CommonStyles.footerIconText}>Share</Text>
                </View>
              </SafeAreaView>
            </View>
          </View>
        </LinearGradient>
      )}
    </>
  );
};

export default TemplatePreview6;

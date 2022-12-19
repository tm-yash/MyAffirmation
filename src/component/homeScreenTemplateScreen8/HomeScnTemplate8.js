import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {styles} from './styles';
import {Images} from '../../utils/Images';
import {FetchAllQuote} from '../../actions/Quotes';
import FastImage from 'react-native-fast-image';
import {CommonStyles} from '../../styles/CommonStyles';
import {useNavigation} from '@react-navigation/native';
import {showToast} from '../common/TostMassage';
import Clipboard from '@react-native-clipboard/clipboard';
import {Template8Skeleton} from '../skelton/SkeltonComponent';

const HomeScnTemplate8 = () => {
  const [Template6, setTemplate6] = useState([]);
  const flatListRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    getAllQuote();
  }, []);

  const getAllQuote = async () => {
    const res = await FetchAllQuote();
    console.log('res all of quote: ', res);
    if (res) {
      setTemplate6(res.data);
    }
  };

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

  const clipboard = () => {
    Clipboard.setString(item.quotes);
    showToast('Quote copied');
  };
  const renderItem = ({item, index}) => {
    return (
      <View key={index}>
        <View
          style={[CommonStyles.spaceBetween, CommonStyles.goBackHeaderView]}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[CommonStyles.center, styles.goBackIconBorder]}>
            <Image style={{tintColor: '#000'}} source={Images.goBackButton} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[CommonStyles.center, styles.goBackIconBorder]}>
            <Image style={{tintColor: '#000'}} source={Images.random} />
          </TouchableOpacity>
        </View>
        <View style={CommonStyles.quoteOfTHeDayScreen}>
          <Image style={styles.bgObject1} source={Images.reelOvalGray1} />
          <ImageBackground
            style={styles.yellowBackground}
            source={Images.yellowBackground}>
            <View style={CommonStyles.quoteViewStyle}>
              <View style={styles.authorInfo}>
                {/* <FastImage
                  style={styles.authorImag}
                  source={{uri: item.author.image[0]}}
                /> */}
                <Text style={styles.quoteStyles}>{item.quotes}</Text>
                {/* <View style={styles.authorNameView}>
                  <Text style={styles.authorName}>{item.author.name}</Text>
                </View> */}
              </View>
            </View>
          </ImageBackground>
          <Image style={styles.bgObject2} source={Images.reelOvalGray2} />
          <View style={CommonStyles.footer}>
            <SafeAreaView style={CommonStyles.spaceBetween}>
              <View style={CommonStyles.center}>
                <TouchableOpacity
                  onPress={clipboard}
                  style={[
                    CommonStyles.center,
                    styles.QuoteFoThaDayFooterBorder,
                  ]}>
                  <Image style={{tintColor: '#000'}} source={Images.copy} />
                </TouchableOpacity>
                <Text style={styles.footerIconText}>copy</Text>
              </View>
              <View style={CommonStyles.center}>
                <TouchableOpacity
                  // onPress={DownloadBtn}
                  style={[
                    CommonStyles.center,
                    styles.QuoteFoThaDayFooterBorder,
                  ]}>
                  <Image style={{tintColor: '#000'}} source={Images.download} />
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
    );
  };
  return (
    <>
      {loading ? (
        <Template8Skeleton />
      ) : (
        <View style={{backgroundColor: '#FFFFFF'}}>
          <FlatList
            data={Template6}
            renderItem={renderItem}
            keyExtractor={item => item._id}
            pagingEnabled={true}
            ref={flatListRef}
          />
        </View>
      )}
    </>
  );
};

export default HomeScnTemplate8;

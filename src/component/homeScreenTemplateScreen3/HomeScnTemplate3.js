import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Images} from '../../utils/Images';
import LinearGradient from 'react-native-linear-gradient';
import {FetchAllQuote} from '../../actions/Quotes';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import {CommonStyles} from '../../styles/CommonStyles';
import {useNavigation} from '@react-navigation/native';
import {showToast} from '../common/TostMassage';
import Clipboard from '@react-native-clipboard/clipboard';
import {Template3Skeleton} from '../skelton/SkeltonComponent';

const HomeScnTemplate3 = () => {
  const [Template3, setTemplate3] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    getAllQuote();
  }, []);

  const getAllQuote = async () => {
    setLoading(true);
    const res = await FetchAllQuote();
    console.log('res all of quote: ', res);
    if (res) {
      setTemplate3(res.data);
      setLoading(false);
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
      <LinearGradient key={index} colors={['#2168A4', '#02B0DB']}>
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
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[CommonStyles.center, CommonStyles.goBackIconBorder]}>
            <Image style={{tintColor: '#ffffff'}} source={Images.random} />
          </TouchableOpacity>
        </View>
        <View style={CommonStyles.quoteOfTHeDayScreen}>
          <View style={CommonStyles.quoteViewStyle}>
            <View style={styles.authorInfo}>
              {/* <FastImage
                style={styles.authorImag}
                source={{uri: item.author.image[0]}}
              /> */}
              {/* <Text style={styles.authorName}>{item.author.name} </Text> */}
              <Text style={styles.quoteStyles}>{item.quotes}</Text>
            </View>
          </View>

          <View style={CommonStyles.footer}>
            <SafeAreaView style={CommonStyles.spaceBetween}>
              <View style={CommonStyles.center}>
                <TouchableOpacity
                  onPress={clipboard}
                  style={[
                    CommonStyles.center,
                    CommonStyles.QuoteFoThaDayFooterBorder,
                  ]}>
                  <Image style={{tintColor: '#ffffff'}} source={Images.copy} />
                </TouchableOpacity>
                <Text style={CommonStyles.footerIconText}>copy</Text>
              </View>
              <View style={CommonStyles.center}>
                <TouchableOpacity
                  // onPress={DownloadBtn}
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
                  <Image style={{tintColor: '#ffffff'}} source={Images.share} />
                </TouchableOpacity>
                <Text style={CommonStyles.footerIconText}>Share</Text>
              </View>
            </SafeAreaView>
          </View>
        </View>
      </LinearGradient>
    );
  };

  return (
    <>
      {loading ? (
        <Template3Skeleton />
      ) : (
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Template3}
            renderItem={renderItem}
            pagingEnabled={true}
            keyExtractor={item => item._id}
          />
        </View>
      )}
    </>
  );
};

export default HomeScnTemplate3;

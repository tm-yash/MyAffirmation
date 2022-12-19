import {
  View,
  Text,
  Share,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import QuoteOftheDayHeader from '../common/quoteOftheDayHeader';
import {styles} from './styles';
import {Images} from '../../utils/Images';
import {CommonStyles} from '../../styles/CommonStyles';
import {DownloadBtn} from './DownloadBtn';

const ImageTempComponent = () => {
  const [copiedText, setCopiedText] = useState('');

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
    const copyToClipboard = () => {
      Clipboard.setString('hello world');
    };

    const fetchCopiedText = async () => {
      const text = await Clipboard.getString();
      setCopiedText(text);
    };

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <TouchableOpacity onPress={copyToClipboard}>
            <Text>Click here to copy to Clipboard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={fetchCopiedText}>
            <Text>View copied text</Text>
          </TouchableOpacity>

          <Text style={styles.copiedText}>{copiedText}</Text>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View
      style={[styles.quoteOfTHeDayScreen, {justifyContent: 'space-between'}]}>
      <QuoteOftheDayHeader />
      <View style={styles.authorInfo}>
        <Image source={Images.authorsImag1} />
        <Text style={styles.AuthorName}>Nilesh bhai kayk ke chhe </Text>
        <Text style={styles.AuthorDetails}>If Yes then Download</Text>
      </View>
      <View style={styles.quoteViewStyle}>
        <Image style={styles.leftQuote} source={Images.leftQuoteIcon} />
        <View>
          <Text style={styles.quoteStyles}>
            If Yes then Download the Croppy app and instantly crop your photos
            as specified by the different social media profile picture sizes.
            This app allows you to crop, flip, and rotate your photos!
          </Text>
        </View>
        <Image style={styles.rightQuote} source={Images.rightQuoteIcon} />
      </View>

      <View>
        <SafeAreaView
          style={[CommonStyles.spaceEvenly, styles.QuoteFoThaDayFooter]}>
          <View style={CommonStyles.center}>
            <TouchableOpacity
              onPress={clipboard}
              style={[CommonStyles.center, styles.QuoteFoThaDayFooterBorder]}>
              <Image style={{tintColor: '#ffffff'}} source={Images.copy} />
            </TouchableOpacity>
            <Text style={styles.footerIconText}>copy</Text>
          </View>
          <View style={CommonStyles.center}>
            <TouchableOpacity
              onPress={DownloadBtn}
              style={[CommonStyles.center, styles.QuoteFoThaDayFooterBorder]}>
              <Image style={{tintColor: '#ffffff'}} source={Images.download} />
            </TouchableOpacity>
            <Text style={styles.footerIconText}>Download</Text>
          </View>
          <View style={CommonStyles.center}>
            <TouchableOpacity
              onPress={onShare}
              style={[CommonStyles.center, styles.QuoteFoThaDayFooterBorder]}>
              <Image style={{tintColor: '#ffffff'}} source={Images.share} />
            </TouchableOpacity>
            <Text style={styles.footerIconText}>Share</Text>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default ImageTempComponent;

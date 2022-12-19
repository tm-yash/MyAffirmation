import {
  View,
  Image,
  Share,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../utils/Images';
import {CommonStyles} from '../../styles/CommonStyles';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {DownloadBtn} from '../ImageTempComponent/DownloadBtn';
import Clipboard from '@react-native-clipboard/clipboard';

const QuoteOfTheDayFooter = () => {
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

  const clipboard = props => {
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
  );
};

export default QuoteOfTheDayFooter;

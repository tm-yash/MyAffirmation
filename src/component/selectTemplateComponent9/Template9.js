import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import CloseHeader from '../common/CloseHeader';
import {CommonStyles} from '../../styles/CommonStyles';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';
import {s} from 'react-native-size-matters';

const Template7 = () => {
  const navigation = useNavigation();
  const [color, setColor] = useState(['#5F21A0', '#5F21A0']);
  const [number, onChangeNumber] = useState(null);
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const [isSelected4, setIsSelected4] = useState(false);
  const [author, onAuthor] = useState(null);
  const button1 = () => {
    setIsSelected1(!isSelected1);
    setIsSelected2(false);
    setIsSelected3(false);
    setIsSelected4(false);
  };

  const button2 = () => {
    setIsSelected2(!isSelected2);
    setIsSelected1(false);
    setIsSelected3(false);
    setIsSelected4(false);
  };
  const button3 = () => {
    setIsSelected3(!isSelected3);
    setIsSelected1(false);
    setIsSelected2(false);
    setIsSelected4(false);
  };
  const button4 = () => {
    setIsSelected4(!isSelected4);
    setIsSelected1(false);
    setIsSelected2(false);
    setIsSelected3(false);
  };
  return (
    <View style={styles.templateMainScreen}>
      <LinearGradient colors={color} style={styles.templateMainView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.CreateQuoteView}>
              <CloseHeader />

              {isSelected1 == true ? (
                <View style={[CommonStyles.center, styles.QuoteBackground1]}>
                  <TextInput
                    multiline={true}
                    placeholderTextColor="#ffffff"
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Enter Your quote here..."
                    keyboardType="default"
                  />
                  {/* <Text style={styles.QuoteBackgroundTitle}>Motivates Me</Text> */}
                  <TextInput
                    // multiline={true}
                    placeholderTextColor="#ffffff"
                    style={styles.QuoteBackgroundTitle}
                    onChangeText={onAuthor}
                    value={author}
                    placeholder="Motivates Me"
                    keyboardType="default"
                  />
                </View>
              ) : isSelected2 == true ? (
                <ImageBackground
                  source={Images.quoteBackgroundImag1}
                  style={[CommonStyles.center, styles.QuoteBackground1]}>
                  <TextInput
                    multiline={true}
                    placeholderTextColor="#ffffff"
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder=" Enter Your quote here..."
                    keyboardType="default"
                  />
                  <TextInput
                    // multiline={true}
                    placeholderTextColor="#ffffff"
                    style={styles.QuoteBackgroundTitle}
                    onChangeText={onAuthor}
                    value={author}
                    placeholder="Motivates Me"
                    keyboardType="default"
                  />
                </ImageBackground>
              ) : isSelected3 == true ? (
                <ImageBackground
                  source={Images.quoteBackgroundImag2}
                  style={[CommonStyles.center, styles.QuoteBackground1]}>
                  <TextInput
                    multiline={true}
                    placeholderTextColor="#ffffff"
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder=" Enter Your quote here..."
                    keyboardType="default"
                  />
                  <TextInput
                    // multiline={true}
                    placeholderTextColor="#ffffff"
                    style={styles.QuoteBackgroundTitle}
                    onChangeText={onAuthor}
                    value={author}
                    placeholder="Motivates Me"
                    keyboardType="default"
                  />
                </ImageBackground>
              ) : isSelected4 == true ? (
                <ImageBackground
                  source={Images.quoteBackgroundImag3}
                  style={[CommonStyles.center, styles.QuoteBackground1]}>
                  <TextInput
                    multiline={true}
                    placeholderTextColor="#ffffff"
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder=" Enter Your quote here..."
                    keyboardType="default"
                  />
                  <TextInput
                    // multiline={true}
                    placeholderTextColor="#ffffff"
                    style={styles.QuoteBackgroundTitle}
                    onChangeText={onAuthor}
                    value={author}
                    placeholder="Motivates Me"
                    keyboardType="default"
                  />
                </ImageBackground>
              ) : (
                <View style={[CommonStyles.center, styles.QuoteBackground1]}>
                  <TextInput
                    multiline={true}
                    placeholderTextColor="#ffffff"
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder=" Enter Your quote here..."
                    keyboardType="default"
                  />
                  <TextInput
                    // multiline={true}
                    placeholderTextColor="#ffffff"
                    style={styles.QuoteBackgroundTitle}
                    onChangeText={onAuthor}
                    value={author}
                    placeholder="Motivates Me"
                    keyboardType="default"
                  />
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        <View>
          <View style={styles.selectColorMainView}>
            <View style={styles.HomeScreenNoch} />
            <View style={CommonStyles.spaceEvenly}>
              <TouchableOpacity
                onPress={() => setColor(['#AA67DD', '#AA67DD'])}>
                <LinearGradient
                  colors={['#AA67DD', '#AA67DD']}
                  style={styles.selectColorView}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setColor(['#F76793', '#F76793'])}>
                <LinearGradient
                  colors={['#F76793', '#F76793']}
                  style={styles.selectColorView}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setColor(['#FF9F69', '#FF9F69'])}>
                <LinearGradient
                  colors={['#FF9F69', '#FF9F69']}
                  style={styles.selectColorView}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setColor(['#66D29E', '#66D29E'])}>
                <LinearGradient
                  colors={['#66D29E', '#66D29E']}
                  style={styles.selectColorView}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setColor(['#F76767', '#F76767'])}>
                <LinearGradient
                  colors={['#F76767', '#F76767']}
                  style={styles.selectColorView}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setColor(['#79C85D', '#79C85D'])}>
                <LinearGradient
                  colors={['#79C85D', '#79C85D']}
                  style={styles.selectColorView}
                />
              </TouchableOpacity>
            </View>
            <View style={[CommonStyles.spaceEvenly, styles.allQuotesVIew]}>
              <TouchableOpacity
                onPress={() => button1()}
                style={[CommonStyles.center, styles.Quotes]}>
                <Text style={styles.QuotesTitle}>Quotes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => button2()}
                style={[CommonStyles.center, styles.Quotes]}>
                <Image source={Images.quoteImage1} />
                <Text style={styles.QuotesTitle}>Quotes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => button3()}
                style={[CommonStyles.center, styles.Quotes]}>
                <Image source={Images.quoteImage2} />
                <Text style={styles.QuotesTitle}>Quotes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => button4()}
                style={[CommonStyles.center, styles.Quotes]}>
                <Image source={Images.quoteImage3} />
                <Text style={styles.QuotesTitle}>Quotes</Text>
              </TouchableOpacity>
            </View>
            <View style={[CommonStyles.spaceEvenly, styles.buttonView]}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[CommonStyles.center, styles.QuoteCancelBtn]}>
                <Text style={styles.cancelTitle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[CommonStyles.center, styles.QuoteSaveBtn]}>
                <Text style={styles.saveTitle}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Template7;

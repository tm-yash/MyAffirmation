import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Text,
  Modal,
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
import {ms} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import {showToast} from '../CommonItem/ToastMsg/ToastMsg';

const Template3 = () => {
  const [color, setColor] = useState(['#2168A4', '#02B0DB']);
  const [authorQuote, setAuthorQuote] = useState('');
  const [authorName, setAuthorName] = useState(null);
  const [authorImage, setAuthorImag] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [colorContain1, setColorContain1] = useState(false);
  const [colorContain2, setColorContain2] = useState(false);
  const [colorContain3, setColorContain3] = useState(false);
  const [colorContain4, setColorContain4] = useState(false);
  const [colorContain5, setColorContain5] = useState(false);
  const [colorContain6, setColorContain6] = useState(false);

  const navigation = useNavigation();

  const selectColor1 = () => {
    setColor(['#F87099', '#AA67DD']);
    setColorContain1(true);
    setColorContain2(false);
    setColorContain3(false);
    setColorContain4(false);
    setColorContain5(false);
    setColorContain6(false);
  };

  const selectColor2 = () => {
    setColor(['#0F2027', '#2C5364']);
    setColorContain2(true);
    setColorContain1(false);
    setColorContain3(false);
    setColorContain4(false);
    setColorContain5(false);
    setColorContain6(false);
  };

  const selectColor3 = () => {
    setColor(['#8A2387', '#F27121']);
    setColorContain3(true);
    setColorContain1(false);
    setColorContain2(false);
    setColorContain4(false);
    setColorContain5(false);
    setColorContain6(false);
  };

  const selectColor4 = () => {
    setColor(['#0f0c29', '#302b63']);
    setColorContain4(true);
    setColorContain1(false);
    setColorContain2(false);
    setColorContain3(false);
    setColorContain5(false);
    setColorContain6(false);
  };

  const selectColor5 = () => {
    setColor(['#6D6027', '#D3CBB8']);
    setColorContain5(true);
    setColorContain1(false);
    setColorContain2(false);
    setColorContain3(false);
    setColorContain4(false);
    setColorContain6(false);
  };

  const selectColor6 = () => {
    setColor(['#F1F2B5', '#135058']);
    setColorContain6(true);
    setColorContain1(false);
    setColorContain2(false);
    setColorContain3(false);
    setColorContain4(false);
    setColorContain5(false);
  };

  const pickSingle = e => {
    // console.log('e: ', e);
    ImagePicker.openPicker({
      width: 50,
      height: 50,
      cropping: true,
    }).then(img => {
      setAuthorImag({uri: img.path});
      console.log(img.path);
    });
  };

  const previewDataTemplate3 = () => {
    {
      authorQuote === ''
        ? showToast('Enter your Affirmation to get motivated!')
        : navigation.navigate('TemplatePreview3screen', {
            authorImage,
            authorQuote,
            authorName,
            color,
          });
    }
  };

  return (
    <View style={styles.templateMainScreen}>
      <LinearGradient colors={color} style={styles.templateMainView}>
        <Image
          style={styles.bgObject1}
          source={Images.homeScreenTemplateQuote1}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.CreateQuoteView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <CloseHeader />

              <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Image
                  style={styles.colorPikerIcon}
                  source={Images.colorPiker}
                />
              </TouchableOpacity>
            </View>

            <View style={[CommonStyles.center, styles.QuoteBackground1]}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TextInput
                  multiline={true}
                  placeholderTextColor="#ffffff"
                  style={styles.input}
                  onChangeText={setAuthorQuote}
                  value={authorQuote}
                  placeholder="Enter Your quote here..."
                  keyboardType="default"
                />
              </View>
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Image
                      style={{tintColor: '#ffffff'}}
                      source={Images.closeIcon}
                    />
                  </TouchableOpacity>
                  <View style={CommonStyles.spaceEvenly}>
                    <TouchableOpacity onPress={() => selectColor1()}>
                      {colorContain1 == true ? (
                        <LinearGradient
                          colors={['#F87099', '#AA67DD']}
                          style={[styles.selectColorView1]}>
                          <LinearGradient
                            style={styles.borderRedius}
                            colors={['#F87099', '#AA67DD']}>
                            <View
                              style={{
                                height: 43,
                                width: 43,
                                borderRadius: 20,
                                // backgroundColor: '#AA67DD',
                                borderColor: '#ffffff',
                                borderWidth: 2,
                              }}
                            />
                          </LinearGradient>
                        </LinearGradient>
                      ) : (
                        <LinearGradient
                          colors={['#F87099', '#AA67DD']}
                          style={styles.selectColorViewAll}
                        />
                      )}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => selectColor2()}>
                      {colorContain2 == true ? (
                        <LinearGradient
                          colors={['#0F2027', '#2C5364']}
                          style={[
                            styles.selectColorView2,
                            styles.borderStyle2,
                          ]}>
                          <LinearGradient
                            style={styles.borderRedius}
                            colors={['#0F2027', '#2C5364']}>
                            <View
                              style={{
                                height: 43,
                                width: 43,
                                borderRadius: 20,
                                borderColor: '#ffffff',
                                borderWidth: 2,
                              }}
                            />
                          </LinearGradient>
                        </LinearGradient>
                      ) : (
                        <LinearGradient
                          colors={['#0F2027', '#2C5364']}
                          style={styles.selectColorViewAll}
                        />
                      )}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => selectColor3()}>
                      {colorContain3 == true ? (
                        <LinearGradient
                          colors={['#8A2387', '#F27121']}
                          style={[
                            styles.selectColorView3,
                            styles.borderStyle3,
                          ]}>
                          <LinearGradient
                            style={styles.borderRedius}
                            colors={['#8A2387', '#F27121']}>
                            <View
                              style={{
                                height: 43,
                                width: 43,
                                borderRadius: 20,
                                borderColor: '#ffffff',
                                borderWidth: 2,
                              }}
                            />
                          </LinearGradient>
                        </LinearGradient>
                      ) : (
                        <LinearGradient
                          colors={['#8A2387', '#F27121']}
                          style={styles.selectColorViewAll}
                        />
                      )}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => selectColor4()}>
                      {colorContain4 == true ? (
                        <LinearGradient
                          colors={['#0f0c29', '#302b63']}
                          style={[
                            styles.selectColorView4,
                            styles.borderStyle4,
                          ]}>
                          <LinearGradient
                            style={styles.borderRedius}
                            colors={['#0f0c29', '#302b63']}>
                            <View
                              style={{
                                height: 43,
                                width: 43,
                                borderRadius: 20,
                                // backgroundColor: '#AA67DD',
                                borderColor: '#ffffff',
                                borderWidth: 2,
                              }}
                            />
                          </LinearGradient>
                        </LinearGradient>
                      ) : (
                        <LinearGradient
                          colors={['#0f0c29', '#302b63']}
                          style={styles.selectColorViewAll}
                        />
                      )}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => selectColor5()}>
                      {colorContain5 == true ? (
                        <LinearGradient
                          colors={['#6D6027', '#D3CBB8']}
                          style={[
                            styles.selectColorView5,
                            styles.borderStyle5,
                          ]}>
                          <LinearGradient
                            style={styles.borderRedius}
                            colors={['#6D6027', '#D3CBB8']}>
                            <View
                              style={{
                                height: 43,
                                width: 43,
                                borderRadius: 20,
                                // backgroundColor: '#AA67DD',
                                borderColor: '#ffffff',
                                borderWidth: 2,
                              }}
                            />
                          </LinearGradient>
                        </LinearGradient>
                      ) : (
                        <LinearGradient
                          colors={['#6D6027', '#D3CBB8']}
                          style={styles.selectColorViewAll}
                        />
                      )}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => selectColor6()}>
                      {colorContain6 == true ? (
                        <LinearGradient
                          colors={['#F1F2B5', '#135058']}
                          style={[
                            styles.selectColorView6,
                            styles.borderStyle6,
                          ]}>
                          <LinearGradient
                            style={styles.borderRedius}
                            colors={['#F1F2B5', '#135058']}>
                            <View
                              style={{
                                height: 43,
                                width: 43,
                                borderRadius: 20,
                                // backgroundColor: '#AA67DD',
                                borderColor: '#ffffff',
                                borderWidth: 2,
                              }}
                            />
                          </LinearGradient>
                        </LinearGradient>
                      ) : (
                        <LinearGradient
                          colors={['#F1F2B5', '#135058']}
                          style={styles.selectColorViewAll}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </TouchableWithoutFeedback>

        {/* <View> */}
        <View style={CommonStyles.selectColorMainView}>
          <View style={CommonStyles.HomeScreenNoch} />

          <View style={[CommonStyles.spaceEvenly, CommonStyles.buttonView]}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[CommonStyles.center, CommonStyles.QuoteCancelBtn]}>
              <Text style={CommonStyles.cancelTitle}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => previewDataTemplate3()}
              style={[CommonStyles.center, CommonStyles.QuoteSaveBtn]}>
              <Text style={CommonStyles.saveTitle}>Preview</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}
        <Image
          style={styles.bgObject2}
          source={Images.homeScreenTemplateQuote2}
        />
      </LinearGradient>
    </View>
  );
};

export default Template3;

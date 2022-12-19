import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import CloseHeader from '../common/CloseHeader';
import {CommonStyles} from '../../styles/CommonStyles';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';

const CreateComponent = () => {
  const navigation = useNavigation();
  const [color, setColor] = useState(['#5F21A0', '#5F21A0']);
  const [number, onChangeNumber] = useState(null);
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const [isSelected4, setIsSelected4] = useState(false);

  return (
    <View style={styles.templateMainScreen}>
      <LinearGradient colors={color} style={styles.templateMainView}>
        <View style={styles.CreateQuoteView}>
          <CloseHeader />

          {isSelected1 == true ? (
            <View style={[CommonStyles.center, styles.QuoteBackground1]}>
              <TextInput
                placeholderTextColor="#ffffff"
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder=""
                keyboardType="numeric"
              />
              <Text style={styles.QuoteBackgroundTitle}>Motivates Me</Text>
            </View>
          ) : isSelected2 == true ? (
            <ImageBackground
              source={Images.quoteBackgroundImag1}
              style={[CommonStyles.center, styles.QuoteBackground1]}>
              <TextInput
                placeholderTextColor="#ffffff"
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder=" placeholder"
                keyboardType="numeric"
              />
              <Text style={styles.QuoteBackgroundTitle}>Motivates Me</Text>
            </ImageBackground>
          ) : isSelected3 == true ? (
            <ImageBackground
              source={Images.quoteBackgroundImag2}
              style={[CommonStyles.center, styles.QuoteBackground1]}>
              <TextInput
                placeholderTextColor="#ffffff"
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder=" placeholder"
                keyboardType="numeric"
              />
              <Text style={styles.QuoteBackgroundTitle}>Motivates Me</Text>
            </ImageBackground>
          ) : isSelected4 == true ? (
            <ImageBackground
              source={Images.quoteBackgroundImag3}
              style={[CommonStyles.center, styles.QuoteBackground1]}>
              <TextInput
                placeholderTextColor="#ffffff"
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder=" placeholder"
                keyboardType="numeric"
              />
              <Text style={styles.QuoteBackgroundTitle}>Motivates Me</Text>
            </ImageBackground>
          ) : (
            <View style={[CommonStyles.center, styles.QuoteBackground1]}>
              <Text style={styles.QuoteBackgroundTitle}>Motivates Me</Text>
            </View>
          )}
        </View>
        <View>
          <View style={styles.selectColorMainView}>
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
                onPress={() => setIsSelected1(!isSelected1)}
                style={[CommonStyles.center, styles.Quotes]}>
                <Text style={styles.QuotesTitle}>Quotes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsSelected2(!isSelected2)}
                style={[CommonStyles.center, styles.Quotes]}>
                <Image source={Images.quoteImage1} />
                <Text style={styles.QuotesTitle}>Quotes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsSelected3(!isSelected3)}
                style={[CommonStyles.center, styles.Quotes]}>
                <Image source={Images.quoteImage2} />
                <Text style={styles.QuotesTitle}>Quotes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsSelected4(!isSelected4)}
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

export default CreateComponent;

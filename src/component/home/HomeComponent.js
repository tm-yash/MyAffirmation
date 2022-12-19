import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {styles} from './styles';
import SettingHeader from '../common/SettingHeader';
import CategoryFlatList from '../homeScreenFlatlist/CategoriesFlatLIst/CategoryFlatList';
import AuthorFlatList from '../homeScreenFlatlist/AuthorsFlatList/AuthorFlatList';
import TemplateFlatList from '../homeScreenFlatlist/TemplateFlatLIst/TemplateFlatList';
import {CommonStyles} from '../../styles/CommonStyles';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {HomeSliderImage} from '../../actions/homeSliderImage';
import DropShadow from 'react-native-drop-shadow';
import {DashboardSkeltonComponent} from '../skelton/SkeltonComponent';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {s} from 'react-native-size-matters';
import {Images} from '../../utils/Images';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = React.useRef(null);
  const isCarousel = React.useRef(null);

  const navigation = useNavigation();

  useEffect(() => {
    QuoteOfThaDay();
  }, []);

  const QuoteOfThaDay = async () => {
    setLoading(true);
    const Response = await HomeSliderImage();
    setQuote(Response.data);

    setLoading(false);
  };

  const renderItem = ({item, index}) => {
    return (
      <DropShadow style={styles.shadowProp}>
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('QuotesRealsScreen')}
          style={[
            styles.quoteTemplate,
            {backgroundColor: item.category.colour},
          ]}>
          <Image
            style={styles.quoteBg1}
            source={Images.QuoteTemplateComponent1}
          />

          <View style={{margin: 30}}>
            <Image style={styles.leftQuoteIcon} source={Images.leftQuoteIcon} />
            <Text style={styles.quoteStyle}>{item.quotes}</Text>
            <Text style={styles.watermark}>My Affirmations</Text>
            <Image
              style={styles.rightQuoteIcon}
              source={Images.rightQuoteIcon}
            />
          </View>
          <Image
            style={styles.quoteBg2}
            source={Images.QuoteTemplateComponent2}
          />
          <Image
            style={styles.quoteBg3}
            source={Images.QuoteTemplateComponent3}
          />
        </TouchableOpacity>
      </DropShadow>
    );
  };

  return (
    <>
      {loading ? (
        <DashboardSkeltonComponent />
      ) : (
        <SafeAreaView style={styles.homeView}>
          <View style={[CommonStyles.headerFlex, styles.homeHeader]}>
            <View>
              <Text style={styles.settingHeaderTitle}>Motivates Me</Text>
              <Text style={styles.settingHeaderSubTitle}>
                good read quotes on life
              </Text>
            </View>

            {/* HOME SCREEN SETTING BUTTON COMPONENT START */}
            {/* <SettingHeader /> */}
            {/* HOME SCREEN SETTING BUTTON COMPONENT END */}
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.homeSliderAndHEaderView}>
              <SafeAreaView>
                <Carousel
                  layout="default"
                  layoutCardOffset={9}
                  ref={ref}
                  data={quote.slice(0, 5)}
                  renderItem={renderItem}
                  sliderWidth={windowWidth}
                  itemWidth={isIphoneX() ? s(300) : s(290)}
                  loop={true}
                  autoplay={true}
                  onSnapToItem={index => setActiveIndex(index)}
                />
              </SafeAreaView>
              <View style={styles.homeFlatListSections}>
                <View style={styles.HomeScreenNoch} />

                {/* HOME SCREEN CATEGORY FLAT LIST START */}
                <CategoryFlatList />
                {/* HOME SCREEN CATEGORY FLAT LIST END */}

                {/* <View style={styles.breakLine} /> */}

                {/* HOME SCREEN AUTHOR FLAT LIST END */}
                {/* <AuthorFlatList /> */}
                {/* HOME SCREEN AUTHOR FLAT LIST END */}

                <View style={styles.breakLine} />

                {/* HOME SCREEN TEMPLATE FLAT LIST END */}
                <TemplateFlatList />
                {/* HOME SCREEN TEMPLATE FLAT LIST END */}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default HomeComponent;

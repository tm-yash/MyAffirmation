import React from 'react';
import {View, Dimensions, SafeAreaView} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// import {useSelector} from 'react-redux';
import {Colors} from '../../styles/Colors';
import {CommonStyles} from '../../styles/CommonStyles';
import {styles} from './styles';
import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const SkeltonComponent = () => {
  return (
    <SkeletonPlaceholder
      speed="600"
      backgroundColor={isDarkMode ? Colors.lightBlack : Colors.simerWhite}
      highlightColor={isDarkMode ? Colors.black : 'white'}>
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View style={styles.Menu} />
          <View style={styles.Share} />
        </View>
        <View style={styles.Quote} />
        <View style={styles.Author} />
        <View style={styles.rowView}>
          <View style={styles.Swipe} />
          <View style={styles.Add} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};
export const SkeltonImagesComponent = () => {
  const isDarkMode = useSelector(state => state.ToggleDarkMode.isDark);
  return (
    <SkeletonPlaceholder
      speed="600"
      backgroundColor={isDarkMode ? '#303030' : '#E1E9EE'}
      highlightColor={isDarkMode ? Colors.black : 'white'}>
      <View style={{marginHorizontal: vs(10), marginTop: vs(20)}}>
        <View style={styles.images} />
        <View style={styles.images} />
      </View>
    </SkeletonPlaceholder>
  );
};

export const CategorySkeltonComponent = () => {
  // const isDarkMode = useSelector(state => state.ToggleDarkMode.isDark);
  return (
    <SkeletonPlaceholder backgroundColor={'pink'} highlightColor={'pink'}>
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View style={styles.category}>
            <View style={styles.categoryCir} />
            <View style={styles.categoryCir} />
            <View style={styles.categoryCir} />
            <View style={styles.categoryCir} />
          </View>
          <View style={styles.category}>
            <View style={styles.categoryCir} />
            <View style={styles.categoryCir} />
            <View style={styles.categoryCir} />
            <View style={styles.categoryCir} />
          </View>
          <View style={styles.category}>
            <View style={styles.categoryCir} />
            <View style={styles.categoryCir} />
            <View style={styles.categoryCir} />
            <View style={styles.categoryCir} />
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const AuthorSkeltonComponent = () => {
  const isDarkMode = useSelector(state => state.ToggleDarkMode.isDark);
  return (
    <SkeletonPlaceholder
      backgroundColor={isDarkMode ? Colors.lightBlack : Colors.simerWhite}
      highlightColor={isDarkMode ? Colors.black : 'white'}>
      <View style={styles.containers}>
        <View style={styles.views}>
          <View style={styles.category}>
            <View style={styles.template} />
            <View style={styles.template} />
            <View style={styles.template} />
          </View>
          <View style={styles.category}>
            <View style={styles.template} />
            <View style={styles.template} />
            <View style={styles.template} />
          </View>
          <View style={styles.category}>
            <View style={styles.template} />
            <View style={styles.template} />
            <View style={styles.template} />
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const DashboardSkeltonComponent = () => {
  const ref = React.useRef(null);
  // const isDarkMode = useSelector(state => state.ToggleDarkMode.isDark);

  return (
    <SkeletonPlaceholder backgroundColor={'#E1E9EE'} highlightColor={'#ffffff'}>
      <View style={styles.container1}>
        <View style={styles.views}>
          <View style={[CommonStyles.headerFlex, styles.category]}>
            <View>
              <View style={styles.homeScreenHeaderLine} />
              <View style={styles.homeScreenHeaderSubLine} />
            </View>
            <View style={styles.categoryCir} />
          </View>
          <SafeAreaView
            style={[CommonStyles.spaceBetween, {marginTop: vs(10)}]}>
            <View style={styles.sliderFirstView} />
            <View style={styles.sliderCenterView} />
            <View style={styles.sliderLastView} />
          </SafeAreaView>
          <View style={{marginTop: vs(20)}}>
            <View style={[CommonStyles.headerFlex, styles.category]}>
              <View style={styles.homeScreenHeaderLine} />
              <View style={styles.seeMoreButton} />
            </View>
            <View style={[CommonStyles.spaceBetween, {marginLeft: s(10)}]}>
              <View style={styles.flatListComponentView}>
                <View style={styles.roundFlatListView} />
                <View style={styles.roundFlatListViewTitle} />
              </View>
              <View style={styles.flatListComponentView}>
                <View style={styles.roundFlatListView} />
                <View style={styles.roundFlatListViewTitle} />
              </View>
              <View style={styles.flatListComponentView}>
                <View style={styles.roundFlatListView} />
                <View style={styles.roundFlatListViewTitle} />
              </View>
              <View style={styles.flatListComponentView}>
                <View style={styles.roundFlatListView} />
                <View style={styles.roundFlatListViewTitle} />
              </View>
              <View style={styles.flatListComponentView}>
                <View style={styles.roundFlatListView} />
                <View style={styles.roundFlatListViewTitle} />
              </View>
              <View style={styles.flatListComponentView}>
                <View style={styles.roundFlatListView} />
                <View style={styles.roundFlatListViewTitle} />
              </View>
            </View>
          </View>

          <View style={{marginTop: vs(20)}}>
            <View style={[CommonStyles.headerFlex, styles.category]}>
              <View style={styles.homeScreenHeaderLine} />
              <View style={styles.seeMoreButton} />
            </View>
            <View style={[CommonStyles.spaceBetween, {marginLeft: s(10)}]}>
              <View style={styles.flatListComponentView}>
                <View style={styles.roundFlatListView} />
                <View style={styles.roundFlatListViewTitle} />
              </View>
              <View style={styles.flatListComponentView}>
                <View style={styles.roundFlatListView} />
                <View style={styles.roundFlatListViewTitle} />
              </View>
              <View style={styles.flatListComponentView}>
                <View style={styles.roundFlatListView} />
                <View style={styles.roundFlatListViewTitle} />
              </View>
              <View style={styles.flatListComponentView}>
                <View style={styles.roundFlatListView} />
                <View style={styles.roundFlatListViewTitle} />
              </View>
              <View style={styles.flatListComponentView}>
                <View style={styles.roundFlatListView} />
                <View style={styles.roundFlatListViewTitle} />
              </View>
              <View style={styles.flatListComponentView}>
                <View style={styles.roundFlatListView} />
                <View style={styles.roundFlatListViewTitle} />
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View style={{height: 40, width: 180, marginBottom: 20}} />
            <View
              style={{height: 20, width: 100, marginBottom: 20, marginTop: 10}}
            />
          </View>
          <View style={[styles.category, {marginTop: 20}]}>
            <View style={styles.template} />
            <View style={styles.template} />
            <View style={styles.template} />
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const SettingSkeltonComponent = () => {
  const isDarkMode = useSelector(state => state.ToggleDarkMode.isDark);
  return (
    <SkeletonPlaceholder backgroundColor={'red'} highlightColor={'red'}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.backIcon} />
          <View style={styles.headerText} />
          <View style={styles.saveText} />
        </View>
        <View style={styles.notification} />
        <View style={styles.notification1} />
        <View style={styles.notification1} />
      </View>
    </SkeletonPlaceholder>
  );
};

export const AuthCatComponent = () => {
  return (
    <SkeletonPlaceholder backgroundColor={'red'} highlightColor={'red'}>
      <View style={styles.main}>
        <View style={[styles.viewStyle, {width: s(100), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(150), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(170), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(100), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(90), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(90), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(90), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(100), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(150), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(170), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(100), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(90), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(90), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(90), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(100), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(150), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(170), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(100), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(90), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(90), height: vs(35)}]} />
        <View style={[styles.viewStyle, {width: s(90), height: vs(35)}]} />
      </View>
    </SkeletonPlaceholder>
  );
};

export const HomeScreenAuthor = () => {
  return (
    <SkeletonPlaceholder backgroundColor={'red'} highlightColor={'red'}>
      <View style={styles.authorsFlatListView}>
        <View style={styles.authorImagView}>
          <View style={{width: ms(70), height: ms(70), borderRadius: 40}} />
        </View>
        <View style={styles.authorName}></View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const ImageCollectionSkeleton = () => {
  return (
    <SkeletonPlaceholder backgroundColor={'#E1E9EE'} highlightColor={'#ffffff'}>
      <View style={styles.container1}>
        <View style={styles.views}>
          <View
            style={[CommonStyles.headerFlex, styles.ImageCollectionCategory]}>
            <View style={styles.homeScreenHeaderLineOfCategory} />
            <View style={styles.categoryCirSeeAll} />
          </View>
          <View style={[CommonStyles.spaceBetween, {marginLeft: s(20)}]}>
            <View style={styles.imageCollectionCategoryRow} />
            <View style={styles.imageCollectionCategoryRow} />
            <View style={styles.imageCollectionCategoryRow} />
            <View style={styles.imageCollectionCategoryRow} />
            <View style={styles.imageCollectionCategoryRow} />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.imageCollectionCategory} />
            <View style={styles.imageCollectionCategory} />
            <View style={styles.imageCollectionCategory} />
            <View style={styles.imageCollectionCategory} />
            <View style={styles.imageCollectionCategory} />
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const AllCategorySkeleton = () => {
  return (
    <SkeletonPlaceholder backgroundColor={'#E1E9EE'} highlightColor={'#ffffff'}>
      <View style={styles.container1}>
        <View style={styles.views}>
          <View style={styles.category}>
            <View style={styles.categoryCir} />
            <View style={styles.homeScreenHeaderLine} />
          </View>
          <View style={{marginHorizontal: s(20)}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: vs(30),
              }}>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: vs(30),
              }}>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: vs(30),
              }}>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: vs(30),
              }}>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: vs(30),
              }}>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: vs(30),
              }}>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
              <View>
                <View style={styles.categoryAllComponent} />
                <View style={{width: s(70), height: vs(20)}} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const AuthorAllList = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: vs(30),
        }}>
        <View>
          <View
            style={[CommonStyles.headerFlex, styles.ImageCollectionCategory]}>
            <View style={styles.categoryCirSeeAll} />
            <View style={styles.allAuthorHeading} />
          </View>
        </View>
        <View style={styles.authorFlatListView}></View>
        <View style={styles.authorFlatListView}></View>
        <View style={styles.authorFlatListView}></View>
        <View style={styles.authorFlatListView}></View>
        <View style={styles.authorFlatListView}></View>
        <View style={styles.authorFlatListView}></View>
        <View style={styles.authorFlatListView}></View>
        <View style={styles.authorFlatListView}></View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const Template1Skeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: vs(30),
        }}>
        <View>
          <View
            style={[CommonStyles.headerFlex, styles.ImageCollectionCategory]}>
            <View style={styles.categoryCirSeeAll} />
            <View style={styles.templateHeader} />
          </View>
        </View>
        <View style={{marginVertical: vs(50)}}>
          <View style={{marginTop: 30}}>
            <View style={[styles.categoryCirSeeAll, {marginBottom: vs(30)}]} />
            <View style={styles.templateQuote} />
            <View style={styles.templateQuote2} />
            <View style={styles.templateQuote} />
            <View style={styles.templateQuote3} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: vs(40),
              width: s(300),
            }}>
            <View style={styles.authorNameDash} />
            <View style={styles.authorName} />
          </View>
        </View>
        <View style={[CommonStyles.headerFlex, styles.templateFooter]}>
          <View style={styles.TemplateFooterIcon} />
          <View style={styles.TemplateFooterIcon} />
          <View style={styles.TemplateFooterIcon} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const Template2Skeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: vs(30),
        }}>
        <View>
          <View
            style={[CommonStyles.headerFlex, styles.ImageCollectionCategory]}>
            <View style={styles.categoryCirSeeAll} />
            <View style={styles.templateHeader} />
          </View>
        </View>
        <View style={{marginVertical: vs(50)}}>
          <View style={{marginTop: 30}}>
            <View style={styles.templateQuote} />
            <View style={styles.templateQuote2} />
            <View style={styles.templateQuote} />
            <View style={styles.templateQuote3} />
          </View>
          <View
            style={{
              // flexDirection: 'row',
              alignItems: 'flex-start',
              marginTop: vs(40),
              width: s(300),
            }}>
            <View style={styles.template2authorName} />
            <View style={[styles.categoryCirSeeAll, {marginBottom: vs(30)}]} />
          </View>
        </View>
        <View style={[CommonStyles.headerFlex, styles.templateFooter]}>
          <View style={styles.TemplateFooterIcon} />
          <View style={styles.TemplateFooterIcon} />
          <View style={styles.TemplateFooterIcon} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const Template3Skeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: vs(30),
        }}>
        <View>
          <View
            style={[CommonStyles.headerFlex, styles.ImageCollectionCategory]}>
            <View style={styles.categoryCirSeeAll} />
            <View style={styles.templateHeader} />
          </View>
        </View>
        <View style={{marginVertical: vs(20)}}>
          <View
            style={{
              alignItems: 'center',
              marginTop: vs(40),
              width: s(300),
            }}>
            <View style={[styles.template3Author, {marginBottom: vs(30)}]} />
            <View style={styles.template2authorName} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View style={styles.templateQuote} />
            <View style={styles.templateQuote2} />
            <View style={styles.templateQuote} />
            <View style={styles.templateQuote3} />
          </View>
        </View>
        <View style={[CommonStyles.headerFlex, styles.templateFooter]}>
          <View style={styles.TemplateFooterIcon} />
          <View style={styles.TemplateFooterIcon} />
          <View style={styles.TemplateFooterIcon} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const Template4Skeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: vs(30),
        }}>
        <View>
          <View
            style={[CommonStyles.headerFlex, styles.ImageCollectionCategory]}>
            <View style={styles.categoryCirSeeAll} />
            <View style={styles.templateHeader} />
          </View>
        </View>
        <View style={{marginVertical: vs(90)}}>
          <View
            style={{
              marginTop: 30,
            }}>
            <View style={styles.templateQuote} />
            <View style={styles.templateQuote2} />
            <View style={styles.templateQuote} />
            <View style={styles.templateQuote3} />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: vs(40),
                flexDirection: 'row',
              }}>
              <View style={[styles.roundCir]} />
              <View style={[styles.template2authorName, {marginLeft: 20}]} />
            </View>
          </View>
        </View>
        <View style={[CommonStyles.headerFlex, styles.templateFooter]}>
          <View style={styles.TemplateFooterIcon} />
          <View style={styles.TemplateFooterIcon} />
          <View style={styles.TemplateFooterIcon} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const Template5Skeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: vs(30),
        }}>
        <View>
          <View
            style={[CommonStyles.headerFlex, styles.ImageCollectionCategory]}>
            <View style={styles.categoryCirSeeAll} />
            <View style={styles.templateHeader} />
          </View>
        </View>
        <View style={{marginVertical: vs(50)}}>
          <View style={{marginTop: 30}}>
            <View style={styles.templateQuote} />
            <View style={styles.templateQuote2} />
            <View style={styles.templateQuote} />
            <View style={styles.templateQuote3} />
          </View>
          <View
            style={{
              // flexDirection: 'row',
              alignItems: 'flex-start',
              marginTop: vs(40),
              width: s(300),
            }}>
            <View style={styles.template2authorName} />
            <View style={[styles.roundCir, {marginBottom: vs(30)}]} />
          </View>
        </View>
        <View style={[CommonStyles.headerFlex, styles.templateFooter]}>
          <View style={styles.TemplateFooterIcon} />
          <View style={styles.TemplateFooterIcon} />
          <View style={styles.TemplateFooterIcon} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const Template8Skeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: vs(30),
        }}>
        <View>
          <View
            style={[CommonStyles.headerFlex, styles.ImageCollectionCategory]}>
            <View style={styles.categoryCirSeeAll} />
            <View style={styles.templateHeader} />
          </View>
        </View>
        <View style={{marginVertical: vs(50)}}>
          <View
            style={{
              alignItems: 'center',
              marginTop: vs(40),
              width: s(300),
            }}>
            <View style={[styles.categoryCirSeeAll, {marginBottom: vs(30)}]} />
            <View style={styles.template2authorName} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <View style={styles.templateQuote} />
            <View style={styles.templateQuote2} />
            <View style={styles.templateQuote} />
            <View style={styles.templateQuote3} />
          </View>
        </View>
        <View style={[CommonStyles.headerFlex, styles.templateFooter]}>
          <View style={styles.TemplateFooterIcon} />
          <View style={styles.TemplateFooterIcon} />
          <View style={styles.TemplateFooterIcon} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

import {
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  ALIGNS,
  CENTER,
  EditMenu,
  FONTDEF,
  LEFT,
  RATIO,
  RIGHT,
  TEXT,
  WHITE,
} from '../editBgTemplate/EditBgTemplate';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
import {Images} from '../../utils/Images';
import {s, vs} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {CommonStyles} from '../../styles/CommonStyles';
import Slider from '@react-native-community/slider';
import {DragTextEditor} from 'react-native-drag-text-editor';
import {COLORS} from '../../styles/Colors';
import {FONTS} from '../common/Fonts';
import {Colors} from '../../styles/Colors';

const WINDOW = Dimensions.get('window');

// const MakeYourQuote = () => {
//   const [selectedProcess, setSelectedProcess] = useState(0);
//   const [imgHeight, setImgHeight] = useState(500);
//   const [imgWidth, setImgWidth] = useState(400);
//   const [textID, setTextId] = useState(0);
//   const [arrayTextData, setArrayTextData] = useState([]);
//   const [sizeOfText] = useState(15);
//   const [sizeTracker] = useState(15);
//   const [selected, setSelected] = useState();
//   const [toggle, setToggle] = useState(false);
//   const [letterSpcOfText] = useState(0);
//   const [letterSpcTracker, setLetterSpcTracker] = useState(0);
//   const [textInAction, setTextInAction] = useState(0);
//   const route = useRoute();
//   const navigation = useNavigation();
//   const _containerRef = useRef(null);

//   const aspectRatio = ratio => {
//     setImgHeight(ratio.height);
//     setImgWidth(ratio.width);
//   };

//   const selectProcess = () => {
//     switch (selectedProcess) {
//       case 1:
//         return (
//           <ScrollView
//             style={{marginTop: 40}}
//             horizontal
//             showsHorizontalScrollIndicator={false}>
//             {RATIO.map(varRatio => {
//               return (
//                 <TouchableOpacity
//                   onPress={() => aspectRatio(varRatio)}
//                   style={({backgroundColor: '#ffffff'}, [styles.box])}>
//                   <Image source={varRatio?.icon} style={styles.ratioIcon} />
//                   <Text style={styles.ratioText}>{varRatio.text}</Text>
//                 </TouchableOpacity>
//               );
//             })}
//           </ScrollView>
//         );
//       case 2:
//         return (
//           <ScrollView
//             style={{marginTop: 40}}
//             horizontal
//             showsHorizontalScrollIndicator={false}>
//             {RATIO.map(varRatio => {
//               return (
//                 <TouchableOpacity
//                   onPress={() => aspectRatio(varRatio)}
//                   style={({backgroundColor: '#ffffff'}, [styles.box])}>
//                   <Image source={varRatio?.icon} style={styles.ratioIcon} />
//                   <Text style={styles.ratioText}>{varRatio.text}</Text>
//                 </TouchableOpacity>
//               );
//             })}
//           </ScrollView>
//         );
//       case 3:
//         return (
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             {COLORS.map(varColor => {
//               return (
//                 <TouchableOpacity
//                   key={varColor}
//                   onPress={() => setColorToText(varColor)}
//                   style={[{backgroundColor: varColor}, styles.colorTouch]}
//                 />
//               );
//             })}
//           </ScrollView>
//         );
//       case 4:
//         return (
//           <View style={styles.parentOfSlide}>
//             <Slider
//               value={sizeOfText}
//               onValueChange={sizeOfText => {
//                 fontSizing(sizeOfText);
//               }}
//               style={styles.slide}
//               minimumValue={0}
//               maximumValue={40}
//               minimumTrackTintColor={'#AA67DD'}
//               maximumTrackTintColor={'#D9D9D9'}
//               thumbTintColor={'#AA67DD'}
//             />
//             <Text style={{fontSize: 25, flex: 1}}>
//               {sizeTracker.toFixed(0)}
//             </Text>
//           </View>
//         );
//       case 5:
//         return (
//           <View style={styles.parentOfSlide}>
//             <Slider
//               value={letterSpcOfText}
//               onValueChange={letters => {
//                 setLetterSpacing(letters);
//               }}
//               style={styles.slide}
//               minimumValue={0}
//               maximumValue={10}
//               minimumTrackTintColor={'#AA67DD'}
//               maximumTrackTintColor={'#D9D9D9'}
//               thumbTintColor={'#AA67DD'}
//             />
//             <Text style={{fontSize: 25, flex: 1}}>
//               {letterSpcTracker.toFixed(0)}
//             </Text>
//           </View>
//         );
//       case 6:
//         return (
//           <View style={styles.parentOfSlide}>
//             <Slider
//               value={lineHegOfText}
//               onValueChange={heg => {
//                 setLineHeight(heg);
//               }}
//               style={styles.slide}
//               minimumValue={0}
//               maximumValue={20}
//               minimumTrackTintColor={Colors.pink}
//               maximumTrackTintColor={Colors.lightGrey}
//               thumbTintColor={Colors.pink}
//             />
//             <Text style={{fontSize: 25, flex: 1}}>
//               {lineHegTracker.toFixed(0)}
//             </Text>
//           </View>
//         );
//       case 7:
//         return ALIGNS.map((aligns, index) => {
//           return (
//             <TouchableOpacity
//               key={index}
//               onPress={() => alignPicker(aligns.name)}
//               style={
//                 ({backgroundColor: WHITE}, [styles.touch, {borderRadius: 5}])
//               }>
//               <Image style={styles.icons} source={aligns.icon} />
//             </TouchableOpacity>
//           );
//         });

//       default:
//         return null;
//     }
//   };

//   const processButtons = () => {
//     return EDITMENU.map((buttons, index) => {
//       return (
//         <TouchableOpacity
//           key={index}
//           onPress={() => onPressEditItem(buttons, index)}
//           style={[styles.touch]}>
//           <Image style={[styles.icons]} source={buttons.icon} />
//         </TouchableOpacity>
//       );
//     });
//   };
//   const setColorToText = colorOfArray => {
//     const index = textInAction;
//     const markers = [...arrayTextData];
//     markers[index].defColor = colorOfArray;
//     setArrayTextData(markers);
//   };
//   const addText = () => {
//     setTextId(textID + 1);
//     let DEFS = {
//       defTextID: textID,
//       defTextValue: TEXT,
//       // defFontFamily: FONTDEF,
//       defAlign: 'center',
//       defLetterSpacing: 0,
//       defColor: '#000000',
//       defLineHeight: sizeOfText,
//       defFontSize: 15,
//       defAspectRatio: '',
//     };
//     setArrayTextData([...arrayTextData, DEFS]);
//   };

//   const onPressEditItem = (buttons, index) => {
//     buttons.id == 0 ? addText() : setSelectedProcess(toggle && buttons.id);
//     setSelected(index);
//     setToggle(!toggle);
//   };
//   const alignPicker = alignValue => {
//     if (alignValue === 0) {
//       const index = textInAction;
//       const markers = [...arrayTextData];
//       markers[index].defAlign = LEFT;
//       setArrayTextData(markers);
//     } else if (alignValue === 1) {
//       const index = textInAction;
//       const markers = [...arrayTextData];
//       markers[index].defAlign = CENTER;
//       setArrayTextData(markers);
//     } else if (alignValue === 2) {
//       const index = textInAction;
//       const markers = [...arrayTextData];
//       markers[index].defAlign = RIGHT;
//       setArrayTextData(markers);
//     }
//   };
//   const setLetterSpacing = valueOfLetter => {
//     const index = textInAction;
//     const markers = [...arrayTextData];
//     markers[index].defLetterSpacing = valueOfLetter;
//     setArrayTextData(markers);
//     setLetterSpcTracker(valueOfLetter);
//   };
//   const fontSizing = sizeValue => {
//     const index = textInAction;
//     const markers = [...arrayTextData];
//     markers[index].defFontSize = sizeValue;
//     markers[index].defLineHeight = sizeValue;
//     setArrayTextData(markers);
//     setLineHegOfText(sizeValue / 2);
//   };

//   const ADDED_TEXTS = arrayTextData.map((ID, index) => {
//     return (
//       <DragTextEditor
//         key={index}
//         minWidth={100}
//         minHeight={100}
//         w={200}
//         h={200}
//         x={WINDOW.width / 4}
//         y={WINDOW.height / 3}
//         FontColor={ID.defColor}
//         LineHeight={ID.defLineHeight}
//         TextAlign={ID.defAlign}
//         LetterSpacing={ID.defLetterSpacing}
//         FontSize={ID.defFontSize}
//         FontFamily={ID.defFontFamily}
//         TopRightAction={() => removeText(ID.defTextID)}
//         centerPress={() => setTextInAction(ID.defTextID)}
//         isDraggable={true}
//         isResizable={true}
//         onDragStart={() => console.log('-Drag Started')}
//         onDragEnd={() => console.log('- Drag ended')}
//         onDrag={() => console.log('- Dragging...')}
//         onResizeStart={() => console.log('- Resize Started')}
//         onResize={() => console.log('- Resizing...')}
//         onResizeEnd={() => console.log('- Resize Ended')}
//       />
//     );
//   });

//   return (
//     <>
//       <View style={[styles.container]}>
//         <View style={styles.rows}>
//           <TouchableOpacity
//             onPress={() => navigation.goBack()}
//             style={[CommonStyles.center, styles.goBackIconBorder]}>
//             <Image
//               style={{tintColor: '#000000'}}
//               source={Images.goBackButton}
//             />
//           </TouchableOpacity>
//           <View style={styles.row}>
//             {/* <TouchableOpacity onPress={downloadImage}>
//               <Image
//                 source={Images.download}
//                 style={[
//                   styles.icon,
//                   {
//                     marginLeft: s(10),
//                   },
//                 ]}
//               />
//             </TouchableOpacity> */}
//             <TouchableOpacity
//               onPress={() => navigation.goBack()}
//               style={[CommonStyles.center, styles.goBackIconBorder]}>
//               <Image style={{tintColor: '#000000'}} source={Images.rightIcon} />
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={{marginTop: vs(50)}}>
//           <View style={styles.wrapper} ref={_containerRef}>
//             <Image
//               source={{uri: route?.params?.imageUrl}}
//               style={[
//                 styles.selectedImage,
//                 {height: imgHeight, width: imgWidth},
//               ]}
//             />
//             {ADDED_TEXTS}
//           </View>
//         </View>
//       </View>
//       <View style={styles.editMenu}>
//         <View style={styles.process}>{selectProcess()}</View>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <View style={styles.process}>{processButtons()}</View>
//         </ScrollView>
//       </View>
//     </>
//   );
// };

const MakeYourQuote = () => {
  const _containerRef = useRef(null);
  const route = useRoute();
  const navigation = useNavigation();
  const [textID, setTextId] = useState(0);
  const [sizeOfText] = useState(15);
  const [arrayTextData, setArrayTextData] = useState([]);
  const [lineHegOfText, setLineHegOfText] = useState(0);
  const [textInAction, setTextInAction] = useState(0);
  const [sizeTracker] = useState(15);
  const [letterSpcTracker, setLetterSpcTracker] = useState(0);
  const [lineHegTracker, setLineHegTracker] = useState(0);
  const [letterSpcOfText] = useState(0);
  const [pickedProcess, setPickedProcess] = useState(0);
  const [selected, setSelected] = useState('pink');
  const [toggle, setToggle] = useState(false);
  const [imgHeight, setImgHeight] = useState(500);
  const [imgWidth, setImgWidth] = useState(380);

  const onPressEditItem = (buttons, index) => {
    buttons.id == 0 ? addText() : setPickedProcess(toggle && buttons.id);
    setSelected(index);
    setToggle(!toggle);
  };

  const processPicker = () => {
    switch (pickedProcess) {
      case 1:
        return (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {RATIO.map(varRatio => {
              return (
                <TouchableOpacity
                  onPress={() => aspectRatio(varRatio)}
                  style={({backgroundColor: '#ffffff'}, [styles.boxSquor])}>
                  <Image source={varRatio?.icon} style={styles.ratioIcon} />
                  <Text style={styles.ratioText}>{varRatio.text}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        );
      case 2:
        return (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {FONTS.map(varFonts => {
              return (
                <TouchableOpacity
                  onPress={() => fontStyling(varFonts?.FontFamily)}
                  style={({backgroundColor: WHITE}, [styles.box])}>
                  <Text
                    style={[
                      styles.filterTitle,
                      {fontFamily: varFonts?.FontFamily},
                    ]}>
                    {varFonts.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        );
      case 3:
        return (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {COLORS.map(varColor => {
              return (
                <TouchableOpacity
                  key={varColor}
                  onPress={() => setColorToText(varColor)}
                  style={[{backgroundColor: varColor}, styles.colorTouch]}
                />
              );
            })}
          </ScrollView>
        );
      case 4:
        return (
          <View style={styles.parentOfSlide}>
            <Slider
              value={sizeOfText}
              onValueChange={sizeOfText => {
                fontSizing(sizeOfText);
              }}
              style={styles.slide}
              minimumValue={0}
              maximumValue={40}
              minimumTrackTintColor={Colors.pink}
              maximumTrackTintColor={Colors.lightGrey}
              thumbTintColor={Colors.pink}
            />
            <Text style={{fontSize: 25, flex: 1}}>
              {sizeTracker.toFixed(0)}
            </Text>
          </View>
        );
      case 5:
        return (
          <View style={styles.parentOfSlide}>
            <Slider
              value={letterSpcOfText}
              onValueChange={letters => {
                setLetterSpacing(letters);
              }}
              style={styles.slide}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor={'pink'}
              maximumTrackTintColor={'gray'}
              thumbTintColor={'pink'}
            />
            <Text style={{fontSize: 25, flex: 1}}>
              {letterSpcTracker.toFixed(0)}
            </Text>
          </View>
        );
      case 6:
        return (
          <View style={styles.parentOfSlide}>
            <Slider
              value={lineHegOfText}
              onValueChange={heg => {
                setLineHeight(heg);
              }}
              style={styles.slide}
              minimumValue={0}
              maximumValue={20}
              minimumTrackTintColor={'pink'}
              maximumTrackTintColor={'gray'}
              thumbTintColor={'pink'}
            />
            <Text style={{fontSize: 25, flex: 1}}>
              {lineHegTracker.toFixed(0)}
            </Text>
          </View>
        );
      case 7:
        return ALIGNS.map((aligns, index) => {
          return (
            <TouchableOpacity
              onPress={() => alignPicker(aligns.name)}
              style={
                ({backgroundColor: WHITE}, [styles.touch, {borderRadius: 5}])
              }>
              <Image style={styles.icons} source={aligns.icon} />
            </TouchableOpacity>
          );
        });

      default:
        return null;
    }
  };

  const fontSizing = sizeValue => {
    const index = textInAction;
    const markers = [...arrayTextData];
    markers[index].defFontSize = sizeValue;
    markers[index].defLineHeight = sizeValue;
    setArrayTextData(markers);
    setLineHegOfText(sizeValue / 2);
  };
  const alignPicker = alignValue => {
    if (alignValue === 0) {
      const index = textInAction;
      const markers = [...arrayTextData];
      markers[index].defAlign = LEFT;
      setArrayTextData(markers);
    } else if (alignValue === 1) {
      const index = textInAction;
      const markers = [...arrayTextData];
      markers[index].defAlign = CENTER;
      setArrayTextData(markers);
    } else if (alignValue === 2) {
      const index = textInAction;
      const markers = [...arrayTextData];
      markers[index].defAlign = RIGHT;
      setArrayTextData(markers);
    }
  };
  const setLineHeight = valueOfLine => {
    const index = textInAction;
    const markers = [...arrayTextData];
    markers[index].defLineHeight = sizeOfText + valueOfLine;
    setArrayTextData(markers);
    setLineHegTracker(sizeOfText + valueOfLine);
  };

  const setLetterSpacing = valueOfLetter => {
    const index = textInAction;
    const markers = [...arrayTextData];
    markers[index].defLetterSpacing = valueOfLetter;
    setArrayTextData(markers);
    setLetterSpcTracker(valueOfLetter);
  };

  const addText = () => {
    setTextId(textID + 1);
    let DEFS = {
      defTextID: textID,
      defTextValue: TEXT,
      defFontFamily: FONTDEF,
      defAlign: 'center',
      defLetterSpacing: 0,
      defColor: '#000000',
      defLineHeight: sizeOfText,
      defFontSize: 15,
      defAspectRatio: '',
    };
    setArrayTextData([...arrayTextData, DEFS]);
  };
  const removeText = c => {
    const filtered = [...arrayTextData].filter(x => x.defTextID !== c);
    setArrayTextData(filtered);
    setTextId(arrayTextData.length);
  };

  const setColorToText = colorOfArray => {
    const index = textInAction;
    const markers = [...arrayTextData];
    markers[index].defColor = colorOfArray;
    setArrayTextData(markers);
  };

  const fontStyling = fontsOfArray => {
    const fontStyle = textInAction;
    const markers = [...arrayTextData];
    markers[fontStyle].defFontFamily = fontsOfArray;
    setArrayTextData(markers);
  };

  const aspectRatio = ratio => {
    setImgHeight(ratio.height);
    setImgWidth(ratio.width);
  };

  const processButtons = () => {
    return EditMenu.map((buttons, index) => {
      return (
        <TouchableOpacity
          onPress={() => onPressEditItem(buttons, index)}
          style={[
            styles.touch,
            // {backgroundColor: selected === index ? Colors.pink : '#EFEFEF'},
          ]}>
          <Image
            style={[
              styles.icons,
              // {tintColor: selected === index ? Colors.white : 'black'},
            ]}
            source={buttons.icon}
          />
        </TouchableOpacity>
      );
    });
  };

  const ADDED_TEXTS = arrayTextData.map((ID, index) => {
    const viewComponent = () => <View style={styles.cornerStyles} />;

    const _cornerComponent = [
      {
        side: 'TR',
        customCornerComponent: () => viewComponent(),
      },
    ];

    const _rotateComponent = {
      side: 'left',
      customRotationComponent: () => viewComponent(),
    };

    const _resizerSnapPoints = ['right', 'left'];

    return (
      <DragTextEditor
        key={index}
        visible={true}
        resizerSnapPoints={_resizerSnapPoints}
        cornerComponents={_cornerComponent}
        rotationComponent={_rotateComponent}
        externalTextStyles={styles.textStyles}
        externalBorderStyles={styles.borderStyles}
        TopRightAction={() => removeText(ID.defTextID)}
        centerPress={() => setTextInAction(ID.defTextID)}
        minWidth={100}
        minHeight={100}
        w={200}
        h={200}
        x={WINDOW.width / 4}
        y={WINDOW.height / 3}
        FontColor={ID.defColor}
        LineHeight={ID.defLineHeight}
        TextAlign={ID.defAlign}
        LetterSpacing={ID.defLetterSpacing}
        FontSize={ID.defFontSize}
        FontFamily={ID.defFontFamily}
        isDraggable={true}
        isResizable={true}
        onDragStart={() => console.log('-Drag Started')}
        onDragEnd={() => console.log('- Drag ended')}
        onDrag={() => console.log('- Dragging...')}
        onResizeStart={() => console.log('- Resize Started')}
        onResize={() => console.log('- Resizing...')}
        onResizeEnd={() => console.log('- Resize Ended')}
      />
    );
  });

  return (
    <>
      <View style={[styles.container]}>
        <View style={styles.rows}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[CommonStyles.center, styles.closeIconBorder]}>
            <Image style={styles.goBackImage} source={Images.closeIcon} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: vs(50)}}>
          <View style={styles.wrapper} ref={_containerRef}>
            <Image
              source={{uri: route?.params?.imageUrl}}
              style={[
                styles.selectedImage,
                {height: imgHeight, width: imgWidth},
              ]}
            />
            {ADDED_TEXTS}
          </View>
        </View>
      </View>
      <View style={styles.editMenu}>
        <View style={styles.process}>{processPicker()}</View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.process}>{processButtons()}</View>
        </ScrollView>
      </View>
    </>
  );
};

export default MakeYourQuote;

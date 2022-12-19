import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../tab/TabNavigation';
import AuthorsScreen from '../../screens/AuthorsScreen';
import CategoryScreen from '../../screens/CategoryScreen';
import TemplateScreen from '../../screens/TemplateScreen';
import SettingScreen from '../../screens/SettingScreen';
import SelectTemplate1Screen from '../../screens/SelectTemplate1Screen';
import SelectTemplate2Screen from '../../screens/SelectTemplate2Screen';
import SelectTemplate3Screen from '../../screens/SelectTemplate3Screen';
import SelectTemplate4Screen from '../../screens/SelectTemplate4Screen';
import SelectTemplate5Screen from '../../screens/SelectTemplate5Screen';
import SelectTemplate6Screen from '../../screens/SelectTemplate6Screen';
import SelectTemplate7Screen from '../../screens/SelectTemplate7Screen';
import SelectTemplate8Screen from '../../screens/SelectTemplate8Screen';
import CreateScreen from '../../screens/CreateScreen';
import ImageTempScreen from '../../screens/ImageTempScreen';
import MakeYourQuoteScreen from '../../screens/MakeYourQuoteScreen';
import QuotesRealsScreen from '../../screens/QuotesRealsScreen';
import AuthorReelScreen from '../../screens/AuthorReelScreen';
import CategoriesReelScreen from '../../screens/CategoriesReelScreen';
import HomeScnTemplateScreen1 from '../../screens/HomeScnTemplateScreen1';
import HomeScnTemplateScreen2 from '../../screens/HomeScnTemplateScreen2';
import HomeScnTemplateScreen3 from '../../screens/HomeScnTemplateScreen3';
import HomeScnTemplateScreen4 from '../../screens/HomeScnTemplateScreen4';
import HomeScnTemplateScreen5 from '../../screens/HomeScnTemplateScreen5';
import HomeScnTemplateScreen6 from '../../screens/HomeScnTemplateScreen6';
import HomeScnTemplateScreen7 from '../../screens/HomeScnTemplateScreen7';
import HomeScnTemplateScreen8 from '../../screens/HomeScnTemplateScreen8';
import TemplatePreview1Screen from '../../screens/TemplatePreview1Screen';
import TemplatePreview2screen from '../../screens/TemplatePreview2screen';
import TemplatePreview3screen from '../../screens/TemplatePreview3screen';
import TemplatePreview4screen from '../../screens/TemplatePreview4screen';
import TemplatePreview5screen from '../../screens/TemplatePreview5screen';
import TemplatePreview6screen from '../../screens/TemplatePreview6screen';
import templatePreview7screen from '../../screens/TemplatePreview7screen';
import templatePreview8screen from '../../screens/TemplatePreview8screen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="AuthorsScreen" component={AuthorsScreen} />
      <Stack.Screen name="TemplateScreen" component={TemplateScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen
        name="SelectTemplate1Screen"
        component={SelectTemplate1Screen}
      />
      <Stack.Screen
        name="SelectTemplate2Screen"
        component={SelectTemplate2Screen}
      />
      <Stack.Screen
        name="SelectTemplate3Screen"
        component={SelectTemplate3Screen}
      />
      <Stack.Screen
        name="SelectTemplate4Screen"
        component={SelectTemplate4Screen}
      />
      <Stack.Screen
        name="SelectTemplate5Screen"
        component={SelectTemplate5Screen}
      />
      <Stack.Screen
        name="SelectTemplate6Screen"
        component={SelectTemplate6Screen}
      />
      <Stack.Screen
        name="SelectTemplate7Screen"
        component={SelectTemplate7Screen}
      />
      <Stack.Screen
        name="SelectTemplate8Screen"
        component={SelectTemplate8Screen}
      />

      <Stack.Screen name="CreateScreen" component={CreateScreen} />
      <Stack.Screen name="ImageTemp" component={ImageTempScreen} />
      <Stack.Screen
        name="MakeYourQuoteScreen"
        component={MakeYourQuoteScreen}
      />
      <Stack.Screen name="QuotesRealsScreen" component={QuotesRealsScreen} />
      <Stack.Screen name="AuthorReelScreen" component={AuthorReelScreen} />
      <Stack.Screen
        name="CategoriesReelScreen"
        component={CategoriesReelScreen}
      />
      <Stack.Screen
        name="HomeScnTemplateScreen1"
        component={HomeScnTemplateScreen1}
      />
      <Stack.Screen
        name="HomeScnTemplateScreen2"
        component={HomeScnTemplateScreen2}
      />
      <Stack.Screen
        name="HomeScnTemplateScreen3"
        component={HomeScnTemplateScreen3}
      />
      <Stack.Screen
        name="HomeScnTemplateScreen4"
        component={HomeScnTemplateScreen4}
      />
      <Stack.Screen
        name="HomeScnTemplateScreen5"
        component={HomeScnTemplateScreen5}
      />
      <Stack.Screen
        name="HomeScnTemplateScreen6"
        component={HomeScnTemplateScreen6}
      />
      <Stack.Screen
        name="HomeScnTemplateScreen7"
        component={HomeScnTemplateScreen7}
      />
      <Stack.Screen
        name="HomeScnTemplateScreen8"
        component={HomeScnTemplateScreen8}
      />
      <Stack.Screen
        name="TemplatePreview1Screen"
        component={TemplatePreview1Screen}
      />
      <Stack.Screen
        name="TemplatePreview2screen"
        component={TemplatePreview2screen}
      />
      <Stack.Screen
        name="TemplatePreview3screen"
        component={TemplatePreview3screen}
      />
      <Stack.Screen
        name="TemplatePreview4screen"
        component={TemplatePreview4screen}
      />
      <Stack.Screen
        name="TemplatePreview5screen"
        component={TemplatePreview5screen}
      />
      <Stack.Screen
        name="TemplatePreview6screen"
        component={TemplatePreview6screen}
      />
      <Stack.Screen
        name="templatePreview7screen"
        component={templatePreview7screen}
      />
      <Stack.Screen
        name="templatePreview8screen"
        component={templatePreview8screen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

import React, {useState} from 'react';
import {useWindowDimensions, SafeAreaView, Platform} from 'react-native';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {s, vs} from 'react-native-size-matters';
import GalleryComponentHeader from '../common/GalleryComponentHeader';
import {FirstRoute} from './FirstRoute';
import {SecondRoute} from './SecondRoute';

// HOME TAB BAR CENTER PLUS BUTTON ON PRESS FIRST TOP TAB START
<FirstRoute />;
// HOME TAB BAR CENTER PLUS BUTTON ON PRESS FIRST TOP TAB END

// HOME TAB BAR CENTER PLUS BUTTON ON PRESS SECOND TOP TAB START
<SecondRoute />;
// HOME TAB BAR CENTER PLUS BUTTON ON PRESS SECOND TOP TAB END

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function GalleryComponent() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'first', title: 'Background'},
    {key: 'second', title: 'Template'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: '#E18C5C',
        height: 3,
        width: s(100),
        marginLeft: s(30),
      }}
      style={{
        backgroundColor: '#ffffff',
        marginBottom: vs(15),
        borderRadius: 20,
      }}
      labelStyle={{
        color: '#E18C5C',
        fontSize: 18,
        fontWeight: '600',
        paddingBottom: vs(5),
        textTransform: 'none',
      }}
    />
  );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#EDF4F6'}}>
      <GalleryComponentHeader title="Categories" />
      <TabView
        style={{
          marginTop: Platform.OS === 'ios' ? vs(20) : vs(20),
          marginHorizontal: s(20),
        }}
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </SafeAreaView>
  );
}

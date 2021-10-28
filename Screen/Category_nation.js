import React, {useContext, useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  Button,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {SceneMap, TabView, TabBar} from 'react-native-tab-view';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Category_nation = () => {
  return (
    <View>
      <Text style={{color: 'white'}}>국가수정</Text>
    </View>
  );
};

export default Category_nation;

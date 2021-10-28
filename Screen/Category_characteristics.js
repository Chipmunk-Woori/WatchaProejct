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

const Category_characteristics = () => {
  return (
    <View>
      <Text style={{color: 'white'}}>특징</Text>
    </View>
  );
};

export default Category_characteristics;

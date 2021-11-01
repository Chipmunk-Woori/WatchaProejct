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
  const [count, setCount] = useState(0);
  const [modifiedCount, setModifiedCount] = useState(0);
  return (
    <View>
      <Text style={{color: 'white'}}>국가 수정</Text>
      <TouchableOpacity
        onPress={() => {
          setCount(count + 1);
          setCount(count + 1);
        }}>
        <Text style={{color: 'white'}}>test</Text>
        <Text style={{color: 'white'}}>count : {count}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setModifiedCount(() => modifiedCount + 1);
          setModifiedCount(() => modifiedCount + 1);
        }}>
        <Text style={{color: 'white'}}>test</Text>
        <Text style={{color: 'white'}}>modifiedCount : {modifiedCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category_nation;

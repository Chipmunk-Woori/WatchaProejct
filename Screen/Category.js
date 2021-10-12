import React, {useState} from 'react';
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
} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../Screen/Home';

const CategoryScreen = ({navigation}) => {
  const Stack = createNativeStackNavigator();

  const FirstRoute = () => (
    <View style={{backgroundColor: 'red', width: '100%', height: 300}} />
  );

  const SecondRoute = () => (
    <View style={{backgroundColor: 'blue', width: '100%', height: 300}} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <>
      <View
        style={{width: '100%', height: 300, backgroundColor: '#bfbfbf'}}></View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
    </>
  );
};

const styles = StyleSheet.create({
  TestText: {
    fontSize: 20,
    color: 'white',
  },
});

export default CategoryScreen;

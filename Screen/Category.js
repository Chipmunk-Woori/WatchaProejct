import React, {useState, useEffect} from 'react';
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
import {SceneMap, TabView, TabBar} from 'react-native-tab-view';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../Screen/Home';
import Category_genre from './Category_genre';
import Category_characteristics from './Category_characteristics';
import Category_nation from './Category_nation';

const CategoryScreen = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  const [reload, setReload] = useState(false);

  const renderScene = SceneMap({
    first: () => {
      return Category_genre({navigation: navigation});
    },
    second: () => {
      return Category_nation({navigation: navigation});
    },
    third: () => {
      return Category_characteristics({navigation: navigation});
    },
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: '장르'},
    {key: 'second', title: '국가'},
    {key: 'third', title: '특징'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'red'}}
      style={{backgroundColor: 'black'}}
    />
  );

  return (
    <>
      <View>
        <Text style={styles.TestText}>카테고리</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </>
  );
};

const styles = StyleSheet.create({
  TestText: {
    fontSize: 20,
    color: 'white',
    margin: 10,
    fontWeight: 'bold',
  },
  tabViewStyle: {
    backgroundColor: 'black',
    width: '100%',
    height: 300,
  },
});

export default CategoryScreen;

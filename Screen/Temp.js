import { createStackNavigator } from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Temp = ({navigation}) => {
    const Stack = createStackNavigator();
    
  return (
    <View>
      <Text style={{color: 'white'}}>프로필수정</Text>
    </View>

    <NavigatorContainer>

    </NavigatorContainer>
  );
};

const styles = StyleSheet.create({
  firstView: {},
});

export default Temp;

import React from 'react';
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
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MyPageScreen from './Screen/MyPage';
import HomeScreen from './Screen/Home';
import CategoryScreen from './Screen/Category';
import ReviewScreen from './Screen/Review';

import SecondRoute from './Screen/SecondRoute';
import ThirdRoute from './Screen/ThirdRoute';

import Recommendation from './Screen/Recommendation';
import MovieDetailScreen from './Screen/MovieDetailScreen';

import ThirdRoute_delete from './Screen/ThirdRoute_delete';
import MovielistStore from './Store/MovielistStore';
import {MovieDetailStore} from './Store/MovieDetailStore';
import {TouchableOpacity} from 'react-native-gesture-handler';

import EditProfileChoice from './Screen/EditProfileChoice';
import EditProfile from './Screen/EditProfile';
import {UserStore} from './Store/UserStore';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const homeNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'black'},
        }}>
        <Stack.Screen name="홈" component={HomeScreen} />
        <Stack.Screen name="SecondRoute" component={SecondRoute} />
        <Stack.Screen name="ThirdRoute" component={ThirdRoute} />
      </Stack.Navigator>
    );
  };

  const categoryNavigator = () => {
    return (
      <MovieDetailStore>
        <Stack.Navigator
          screenOptions={{
            cardStyle: {backgroundColor: 'black'},
          }}>
          <Stack.Screen
            options={{headerShown: false}}
            name="카테고리"
            component={CategoryScreen}
          />
          <Stack.Screen
            name="Recommendation"
            component={Recommendation}
            options={{
              headerTitle: () => {
                // ↑ 헤더 글
                return (
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    이번주의 발견
                  </Text>
                );
              },
              headerStyle: {
                backgroundColor: 'black',
                // ↑ 헤더 배경 색
              },
              headerTintColor: 'white',
              // ↑ 헤더 back button 화살표 색상
            }}
          />
          <Stack.Screen
            name="MovieDetailScreen"
            component={MovieDetailScreen}
          />
        </Stack.Navigator>
      </MovieDetailStore>
    );
  };

  const MyPageNavigator = () => {
    return (
      <UserStore>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: 'black'},
          }}>
          <Stack.Screen name="MyPageScreen" component={MyPageScreen} />
          <Stack.Screen
            name="ThirdRoute_delete"
            component={ThirdRoute_delete}
          />
          <Stack.Screen
            name="EditProfileChoice"
            component={EditProfileChoice}
          />
          <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
      </UserStore>
    );
  };

  return (
    <MovielistStore>
      <NavigationContainer>
        <Tab.Navigator
          sceneContainerStyle={{backgroundColor: 'black'}}
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
            style: {
              backgroundColor: 'black',
            },
          }}>
          <Tab.Screen
            name="홈"
            component={homeNavigator}
            options={({route}) => ({
              tabBarIcon: ({focused}) => (
                <Image
                  source={require('./asset/home.png')}
                  style={{width: 20, height: 20}}
                />
              ),
            })}
          />

          <Tab.Screen
            name="카테고리"
            component={categoryNavigator}
            options={({route}) => ({
              tabBarIcon: ({focused}) => (
                <Image
                  source={require('./asset/category.png')}
                  style={{width: 20, height: 20}}
                />
              ),
            })}
          />
          <Tab.Screen
            name="평가하기"
            component={ReviewScreen}
            options={({route}) => ({
              tabBarIcon: ({focused}) => (
                <Image
                  source={require('./asset/review.png')}
                  style={{width: 20, height: 20}}
                />
              ),
            })}
          />
          <Tab.Screen
            name="마이페이지"
            component={MyPageNavigator}
            options={({route}) => ({
              tabBarIcon: ({focused}) => (
                <Image
                  source={require('./asset/mypage.png')}
                  style={{width: 20, height: 20}}
                />
              ),
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </MovielistStore>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;

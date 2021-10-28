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

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SecondRoute from './SecondRoute';
import ThirdRoute from './ThirdRoute';
import ThirdRoute_delete from './ThirdRoute_delete';
import {StoreContext} from '../Store/MovielistStore';

const FirstRoute = () => (
  <View style={styles.contentsView}>
    <Image
      source={require('../asset/videoPlay.png')}
      style={styles.contentsImage}
    />
    <Text style={styles.contentsText}>감상 중인 작품이 없어요</Text>
  </View>
);

const FourthRoute = () => <View style={styles.contentsView} />;

const MyPageScreen = ({navigation}) => {
  const {movielist, setMovieList} = useContext(StoreContext);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setReload(!reload);
  }, [movielist]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: () => {
      return SecondRoute({navigation: navigation});
    },
    third: () => {
      return <ThirdRoute navigation={navigation} />;
    },
    fourth: FourthRoute,
  });
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: '이어보기'},
    {key: 'second', title: '보고싶어요'},
    {key: 'third', title: '다 본 작품'},
    {key: 'fourth', title: '다운로드'},
  ]);
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'red'}}
      style={{backgroundColor: 'black'}}
    />
  );
  return (
    <View style={{flex: 1}}>
      <View style={styles.topView}>
        <View style={{flex: 1}}>
          <Text style={styles.topText}>마이페이지</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../asset/setting.png')}
            style={styles.topIcon}
          />
          <Image
            source={require('../asset/loupe_white.png')}
            style={styles.topIcon}
          />
        </View>
      </View>
      <View style={styles.userView}>
        <View style={styles.userViewIn}>
          <Image
            source={require('../asset/circle.png')}
            style={styles.userImage}
          />
          <Text style={styles.userText}>USER</Text>
        </View>
        <View style={styles.userViewIn}>
          <Image
            source={require('../asset/circle.png')}
            style={styles.userImage}
          />
          <Text style={styles.userText}>USER</Text>
        </View>
        <View style={styles.userViewIn}>
          <Image
            source={require('../asset/circle.png')}
            style={styles.userImage}
          />
          <Text style={styles.userText}>USER</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditProfileChoice');
          }}>
          <View style={styles.profileChangeView}>
            <Image
              source={require('../asset/pen.png')}
              style={styles.profileChangeViewImage}
            />
            <Text style={{color: 'white'}}>프로필 수정</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
      <TabView
        style={{flex: 1, backgroundColor: 'black'}}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={index => {
          setIndex(index);
        }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  topText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  topIcon: {
    width: 17,
    height: 17,
    marginLeft: 25,
  },
  userView: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center',
  },
  userViewIn: {
    alignItems: 'center',
    marginRight: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    marginBottom: 3,
  },
  userText: {
    color: 'white',
    fontSize: 11,
  },
  profileChangeView: {
    backgroundColor: '#454545',
    borderColor: '#454545',
    borderWidth: 1,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: 130,
  },
  profileChangeViewImage: {
    width: 10,
    height: 10,
    marginRight: 10,
  },
  line: {
    borderTopColor: '#454545',
    borderWidth: 1,
  },
  menuView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuTextView: {
    borderBottomColor: 'red',
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  menuText: {
    color: 'white',
    fontSize: 13,
    marginBottom: 10,
  },
  contentsView: {
    width: '100%',
    height: 450,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentsImage: {
    width: 70,
    height: 70,
  },
  contentsText: {
    marginTop: 18,
    fontSize: 17,
    color: '#454545',
  },
  TouchableOpacity_one: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
});

export default MyPageScreen;

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
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  const Location_1 = () => {
    return (
      <View style={styles.currentLocationView}>
        <Image
          source={require('../asset/currentLocation_white.png')}
          style={styles.currentLocationImage}
        />
        <Image
          source={require('../asset/currentLocation_gray.png')}
          style={styles.currentLocationImage}
        />
        <Image
          source={require('../asset/currentLocation_gray.png')}
          style={styles.currentLocationImage}
        />
      </View>
    );
  };

  const Location_2 = () => {
    return (
      <View style={styles.currentLocationView}>
        <Image
          source={require('../asset/currentLocation_gray.png')}
          style={styles.currentLocationImage}
        />
        <Image
          source={require('../asset/currentLocation_white.png')}
          style={styles.currentLocationImage}
        />
        <Image
          source={require('../asset/currentLocation_gray.png')}
          style={styles.currentLocationImage}
        />
      </View>
    );
  };

  const Location_3 = () => {
    return (
      <View style={styles.currentLocationView}>
        <Image
          source={require('../asset/currentLocation_gray.png')}
          style={styles.currentLocationImage}
        />
        <Image
          source={require('../asset/currentLocation_gray.png')}
          style={styles.currentLocationImage}
        />
        <Image
          source={require('../asset/currentLocation_white.png')}
          style={styles.currentLocationImage}
        />
      </View>
    );
  };

  const DATA_mini = [
    {
      id: '1',
      poster: require('../asset/miniPoster_1.jpg'),
      title: '빅 피쉬',
    },
    {
      id: '2',
      poster: require('../asset/miniPoster_2.jpg'),
      title: '이지A',
    },
    {
      id: '3',
      poster: require('../asset/miniPoster_3.jpg'),
      title: '백설공주',
    },
  ];

  useEffect(() => {
    const temp = [
      {
        id: '1',
        poster: require('../asset/poster_1.png'),
        title: '최고 인기 시리즈',
        subTitle: '와이 우먼 킬 시즌2, 왕좌의 게임, 무한도전 등',
        location: Location_1(),
      },
      {
        id: '2',
        poster: require('../asset/poster_2.png'),
        title: '안나 : 죽지 않는 아이들',
        subTitle: '어른들은 다 죽었다',
        location: Location_2(),
      },
      {
        id: '3',
        poster: require('../asset/poster_3.png'),
        title: '와이 우먼 킬2',
        subTitle: '"꼭꼭 묻어라 머리카락 보일라" 시즌2, 2화 도착!',
        location: Location_3(),
      },
    ];

    setData(temp);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(data, index) => index.toString()}
        horizontal={true}
        renderItem={({item}) => {
          return (
            <View key={item.id}>
              <ImageBackground
                source={item.poster}
                style={{width: 400, height: 460}}>
                <View style={styles.topIconView}>
                  <Image
                    source={require('../asset/bell.png')}
                    style={styles.topIcon}
                    // resize="contain"
                  />
                  <Image
                    source={require('../asset/loupe.png')}
                    style={styles.topIcon}
                  />
                </View>
                <View>
                  <Text style={styles.mainTitleText}>{item.title}</Text>
                  <Text style={styles.mainTitleTextSub}>{item.subTitle}</Text>

                  {item.location}
                </View>
              </ImageBackground>
            </View>
          );
        }}
      />

      <View style={styles.miniListView}>
        <Text style={styles.miniListTitle}>새로 올라온 작품</Text>
        <FlatList
          data={DATA_mini}
          keyExtractor={(data, index) => index.toString()}
          horizontal={true}
          renderItem={({item}) => {
            return (
              <View key={item.id}>
                <Image source={item.poster} style={styles.miniList_poster} />
                <Text style={styles.miniList_title}>{item.title}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  topIconView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  topIcon: {
    width: 18,
    height: 18,
    marginLeft: 25,
  },
  mainTitleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 310,
    marginLeft: 8,
  },
  mainTitleTextSub: {
    color: 'white',
    fontSize: 14,
    marginLeft: 8,
    width: 200,
  },
  currentLocationView: {
    flexDirection: 'row',
    marginLeft: 8,
    marginTop: 16,
  },
  currentLocationImage: {
    width: 10,
    height: 10,
    marginRight: 8,
  },
  miniListView: {
    marginLeft: 13,
  },
  miniListTitle: {
    color: 'white',
    fontSize: 15,
    marginTop: 6,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  miniList_poster: {
    width: 185,
    height: 96,
    marginRight: 2,
    marginBottom: 3,
  },
  miniList_title: {
    color: 'white',
    fontSize: 12,
  },
});
export default HomeScreen;

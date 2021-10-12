import React, {useEffect, useState} from 'react';
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
import {FlatList} from 'react-native-gesture-handler';
import {SceneMap, TabView, TabBar} from 'react-native-tab-view';

const SecondRoute = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const tempMovieList = [
      {
        id: '1',
        poster: require('../asset/poster_4.png'),
        title: '모가디슈',
      },
      {
        id: '2',
        poster: require('../asset/poster_5.png'),
        title: '극한직업',
      },
      {
        id: '3',
        poster: require('../asset/poster_6.png'),
        title: '인질',
      },
      {
        id: '4',
        poster: require('../asset/poster_7.png'),
        title: '페르소나',
      },
    ];

    setData(tempMovieList);
  }, []);

  return (
    <View style={styles.contentsView}>
      <FlatList
        data={data}
        keyExtractor={(data, index) => index.toString()}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <View key={item.id} style={styles.movieView}>
              <TouchableOpacity
                style={styles.TouchableOpacity_one}
                onPress={() => navigation.navigate('홈')}>
                <Image source={item.poster} style={styles.moviePoster} />
                <Text style={{color: 'white'}}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentsView: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  movieView: {
    flex: 1,
  },
  TouchableOpacity_one: {
    height: 150,
  },
  moviePoster: {
    width: 180,
    height: 115,
  },
});

export default SecondRoute;

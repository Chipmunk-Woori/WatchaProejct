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
import {FlatList} from 'react-native-gesture-handler';
import {StoreContext} from '../Store/MovielistStore';

// 1. import {useIsFocused}
import {useIsFocused} from '@react-navigation/native';

const ThirdRoute = ({navigation}) => {
  const {movielist, setMovieList} = useContext(StoreContext);

  const [changedMovielist, setChangedMovielist] = useState([]);
  const [reload, setReload] = useState(false);

  const isFocused = useIsFocused(); // 2. isFocused : 지금 보고있는 화면

  useEffect(() => {
    // 4. movielist 가 변경된 경우에만 작동될 수 있도록 length 이용한 if문
    if (changedMovielist.length !== movielist.length) {
      setChangedMovielist(movielist);
      setReload(!reload);
    }
  }, [isFocused]); // 3. <감지> isFocused 가 변경되면

  return (
    <View>
      <TouchableOpacity
        style={styles.TouchableOpacityMovie}
        onPress={() => {
          navigation.navigate('ThirdRoute_delete');
        }}>
        <Text style={{color: 'blue'}}>항목 삭제하기</Text>
      </TouchableOpacity>
      <View style={styles.contentsView}>
        <FlatList
          data={changedMovielist}
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
          }}></FlatList>
      </View>
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
  TouchableOpacityMovie: {
    height: 20,
    width: 100,
    margin: 10,
  },
});

export default ThirdRoute;

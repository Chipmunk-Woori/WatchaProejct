import React, {useEffect, useState, useContext} from 'react';
import MovieDetailStore from '../Store/MovieDetailStore';
import {MovieDetailContext} from '../Store/MovieDetailStore';

import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MovieDetailScreen = ({navigation}) => {
  const {dataList, setdataList} = useContext(MovieDetailContext);
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    setTempData(dataList);
  }, []);

  return (
    <View style={{width: '100%', height: 700, position: 'relative'}}>
      <View style={{height: 180}}>
        <Image
          style={{width: '100%', height: 180}}
          source={tempData.length > 0 && tempData[0].img}
        />
      </View>

      <View style={{position: 'absolute', top: 10, left: 15}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.backButton}
            source={require('../asset/arrow.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={{position: 'absolute', top: 120, left: 10}}>
        <Text style={styles.textWhite}>
          {tempData.length > 0 && tempData[0].title}
        </Text>
      </View>

      <View style={styles.flatListViewGray}>
        <View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Image
              style={{width: 17, height: 17, marginRight: 15, marginLeft: 10}}
              source={require('../asset/people.png')}
            />
            <Text style={{color: 'white'}}>
              {tempData.length > 0 && tempData[0].review}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Image
              style={{width: 17, height: 17, marginRight: 15, marginLeft: 10}}
              source={require('../asset/medal.png')}
            />
            <Text style={{color: 'white'}}>
              {tempData.length > 0 && tempData[0].rate}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Image
              style={{width: 17, height: 17, marginRight: 15, marginLeft: 10}}
              source={require('../asset/trophy.png')}
            />
            <Text style={{color: 'white'}}>
              {tempData.length > 0 && tempData[0].trophy}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Image
              style={{width: 17, height: 17, marginRight: 15, marginLeft: 10}}
              source={require('../asset/graph.png')}
            />

            <Text style={{color: 'white'}}>
              {tempData.length > 0 && tempData[0].graph}
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', marginBottom: 10, marginLeft: 10}}>
            <Image
              style={{width: 17, height: 17, marginRight: 15}}
              source={require('../asset/hearts.png')}
            />

            <Text style={{color: 'white'}}>
              {tempData.length > 0 && tempData[0].heart}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textWhite: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  backButton: {
    width: 20,
    height: 20,
  },
  flatListViewGray: {
    marginTop: 20,
    backgroundColor: 'rgba(70, 70, 70, 0.5)',
    width: '100%',
    height: 180,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});

export default MovieDetailScreen;

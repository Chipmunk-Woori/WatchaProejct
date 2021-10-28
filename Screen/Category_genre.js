import React, {useContext, useEffect, useState} from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {SceneMap, TabView, TabBar} from 'react-native-tab-view';

import Recommendation from './Recommendation';

const Category_genre = ({navigation}) => {
  const [titleText, setTitleText] = useState('왓챠가 처음이신가요?');
  const [subTitleText, setSubTitleText] = useState(
    '신규 회원님을 위한 취향저격 추천작',
  );
  const [menuData, setMenuData] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const temp = [
      {
        id: '1',
        title: '새로 올라온 작품',
      },
      {
        id: '2',
        title: '새로운 에피소드',
      },
      {
        id: '3',
        title: '공개 예정인 작품',
      },
      {
        id: '4',
        title: '왓챠 익스클루시브',
      },
      {
        id: '5',
        title: '영어 자막 지원 작품',
      },
      {
        id: '6',
        title: 'TV드라마',
      },
      {
        id: '7',
        title: 'TV애니메이션',
      },
    ];

    setMenuData(temp);
    setReload(!reload);
  }, []);

  return (
    <View>
      <View>
        <TouchableOpacity
          style={{width: '100%', height: 70}}
          // ↑ ★크기 지정하지않으면 아래 FlatList 에 묻힘
          onPress={() => {
            navigation.navigate('Recommendation');
          }}>
          <View style={styles.titleView}>
            <View>
              <Text style={styles.titleText}>{titleText}</Text>
              <Text style={styles.subTitleText}>{subTitleText}</Text>
            </View>

            <View style={styles.openButton}>
              <Text style={{color: 'red'}}>열기</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={menuData}
          renderItem={({item}) => {
            return (
              <View key={item.id} style={styles.item}>
                {/* ↑ ★key 지정해주기 */}
                <View style={{marginLeft: 10}}>
                  <Text style={{fontSize: 15, color: 'white'}}>
                    {item.title}
                  </Text>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleView: {
    width: '100%',
    height: 70,

    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  subTitleText: {
    fontSize: 14,
    color: 'white',
  },
  openButton: {
    height: 32,
    width: 60,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100,
  },
  item: {
    backgroundColor: 'black',
    height: 45,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
  },
  flatListText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Category_genre;

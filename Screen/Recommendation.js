import React, {useEffect, useState} from 'react';

import {
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
  FlatList,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {SceneMap, TabView, TabBar} from 'react-native-tab-view';

const Recommendation = ({navigation}) => {
  const [topTitle, setTopTitle] = useState('이번주의 발견');
  const [topDay, setTopDate] = useState('2021년 10월 셋째주');
  const [topSubText, setTopSubText] = useState(
    '매주 금요일마다 오직 회원님을 위한 작품들을 추천합니다. 평가를 많이 할수록 추천이 더 정확해집니다.',
  );

  const dataList = [
    {
      id: 0,
      title: '너의 이름은.',
      starRate: '평균 4.0',
      explanation:
        '깊은 산골짜기 시골 마을에 사는 미츠하와 도쿄에 사는 터키. 만날 리 없던 두 사람은',
      review: '조필현, 강미경님이 평가를 남겼어요',
      rate: '최근 한달간 시청률 상위 5% 작품',
      trophy: '일본 애니메이션영화 흥행 수입 1위',
      img: require('../asset/poster_8.png'),
      graph: '관객 수 3백만 돌파 영화',
      heart: '왓챠피디아 회원들이 가장 보고싶어하는 상위 1% 작품',
    },
    {
      id: 1,
      title: '해리포터와 마법사의 돌',
      starRate: '평균 4.2',
      explanation:
        '이모네 식구의 갖은 구박을 받으며 살아가던 고아 소년 해리포터.',
      review: '김준호, 신재호님 포함 친구 3명이 평가를 남겼어요',
      rate: '최근 한달간 시청률 상위 5% 작품',
      trophy: '',
      img: require('../asset/poster_9.png'),
      graph: '',
      heart: '',
    },
    {
      id: 3,
      title: '비긴 어게인',
      starRate: '평균 4.1',
      explanation:
        '싱어송라이터 그레타는 남자친구 데이브가 스타가 되며 멀어진다. 음반 프로듀서였던 댄은 그레타의 자작곡을 듣고',
      review: '손찬일, 강미경님 포함 친구 6명이 평가를 남겼어요',
      rate: '최근 한달간 시청률 상위 5% 작품',
      trophy: '',
      img: require('../asset/poster_10.png'),
      graph: '관객 수 3백만 돌파 영화',
      heart: '왓챠피디아 회원들이 가장 보고싶어하는 상위 1% 작품',
    },
  ];

  const trophyComponent = trophyProps => {
    if (trophyProps !== '') {
      return (
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Image
            style={{width: 17, height: 17, marginRight: 15}}
            source={require('../asset/trophy.png')}
          />

          <Text style={{color: 'white'}}>{trophyProps}</Text>
        </View>
      );
    }
  };

  const graphComponent = graphProps => {
    if (graphProps !== '') {
      return (
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Image
            style={{width: 17, height: 17, marginRight: 15}}
            source={require('../asset/graph.png')}
          />

          <Text style={{color: 'white'}}>{graphProps}</Text>
        </View>
      );
    }
  };

  const heartsComponent = heartsProps => {
    if (heartsProps !== '') {
      return (
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Image
            style={{width: 17, height: 17, marginRight: 15}}
            source={require('../asset/hearts.png')}
          />

          <Text style={{color: 'white'}}>{heartsProps}</Text>
        </View>
      );
    }
  };

  const getHeader = () => {
    return (
      <View>
        <View style={styles.topView}>
          {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                style={styles.goBackArrow}
                source={require('../asset/arrow.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                marginLeft: 20,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              이번주의 발견
            </Text>
          </View> */}

          <Text style={styles.topTitle}>{topTitle}</Text>
          <Text style={styles.topDay}>{topDay}</Text>
          <Text style={styles.topSubText}>{topSubText}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              borderBottomColor: 'dimgray',
              borderBottomWidth: 0.6,
              marginBottom: 17,
            }}></View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={{width: '100%', height: 600}}>
        <FlatList
          data={dataList}
          keyExtractor={item => item.id}
          ListHeaderComponent={getHeader}
          renderItem={({item, index}) => {
            return (
              <View key={item.id} style={{marginBottom: 15}}>
                <View style={styles.flatListView}>
                  <TouchableOpacity
                    onPress={() => {
                      if (index == 0) {
                        navigation.navigate('MovieDetailScreen');
                      }
                    }}>
                    <Image
                      style={{width: '100%', height: 170, marginBottom: 10}}
                      source={item.img}
                    />
                    <Text style={styles.flatListTitle}>{item.title}</Text>
                    <Text style={styles.flatListstarRate}>{item.starRate}</Text>
                    <Text style={styles.flatListexplanation}>
                      {item.explanation}
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.flatListViewGray}>
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Image
                      style={{width: 17, height: 17, marginRight: 15}}
                      source={require('../asset/people.png')}
                    />
                    <Text style={{color: 'white'}}>{item.review}</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Image
                      style={{width: 17, height: 17, marginRight: 15}}
                      source={require('../asset/medal.png')}
                    />
                    <Text style={{color: 'white'}}>{item.rate}</Text>
                  </View>
                  <View>{trophyComponent(item.trophy)}</View>
                  <View>{graphComponent(item.graph)}</View>
                  <View>{heartsComponent(item.heart)}</View>
                </View>
              </View>
            );
          }}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    marginLeft: 12,
    marginRight: 40,
    marginBottom: 10,
    marginTop: 20,
    overflow: 'scroll',
    height: 150,
  },
  topTitle: {
    fontSize: 29,
    fontWeight: 'bold',
    color: 'white',
  },
  topDay: {
    fontSize: 16,
    color: 'red',
  },
  topSubText: {
    fontSize: 16,
    color: 'lightgray',
    marginTop: 10,
  },
  goBackArrow: {
    width: 16,
    height: 16,
    marginBottom: 10,
    marginTop: 12,
  },
  flatListTitle: {
    color: 'white',
    fontSize: 20,
  },
  flatListstarRate: {
    color: 'lightgray',
    fontSize: 12,
  },
  flatListexplanation: {
    color: 'lightgray',
    fontSize: 15,
    marginBottom: 15,
    marginTop: 15,
  },
  flatListView: {
    marginLeft: 20,
    marginRight: 20,
  },
  flatListViewGray: {
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Recommendation;

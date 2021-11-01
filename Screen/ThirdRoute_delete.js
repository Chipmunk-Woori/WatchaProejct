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

import ThirdRoute from './ThirdRoute';
import {createContext} from 'react';
import {StoreContext} from '../Store/MovielistStore';

const ThirdRoute_delete = ({route, navigation}) => {
  const [checkbox, setCheckbox] = useState([]); // 체크된 index 가 들어간 배열
  const [reload, setReload] = useState(false); // 새로고침용

  const {movielist, setMovieList} = useContext(StoreContext);

  const checkedImg = '../asset/checkedCircle.png';
  const notCheckedImg = '../asset/notCheckedCircle.png';

  let tempMovieList = movielist; //수정된 movielist
  let tempCheckbox = checkbox;

  // 체크 하고 체크 푸는 함수
  // 체크 표시 바꿔주는 함수 (노체크 → 체크  or  체크 →  노체크)
  const changeCheckBox = index => {
    let checkboxTemp = checkbox;
    let check = false;

    // 이미 체크된 상태인지 확인 후 체크된 상태면 체크 제거하기
    if (checkbox.length !== 0) {
      checkbox.map(item => {
        if (item === index) {
          checkboxTemp = checkboxTemp.filter(item => {
            return item !== index;
          });
          check = true;
        }
      });
    }

    // 이미 들어간 상태가 아니면 추가 하기
    if (!check) {
      checkboxTemp.push(index);
    }

    // 반영된 부분 넣어주기!
    setCheckbox(checkboxTemp);
    // 새로고침
    setReload(!reload);
  };

  // (현재 checkbox 체크 여부를 판단하는 함수~)
  // 현재 체크된 상태인지 아닌지 확인해주는 함수
  const returnCheckboxState = index => {
    let checkboxTemp = checkbox;
    let check = false;

    // (해당 index가 체크되어있는지 체크 후 리턴)
    // 체크 되어있으면 true 아니면 false 리턴
    if (checkboxTemp.length !== 0) {
      checkboxTemp.map(item => {
        if (item === index) {
          check = true;
        }
      });
    }

    return check;
  };

  // 체크표시된 movieList 내용 삭제하는 함수
  const deleteMovieList = () => {
    tempMovieList.map((movielistItem, movielistIndex) => {
      checkbox.map(checkboxItem => {
        if (movielistIndex == checkboxItem) {
          tempMovieList.splice(movielistIndex, 1);
        }
      });
    });
    // 값 넣기
    setMovieList(tempMovieList);

    // 새로고침
    setReload(!reload);

    navigation.navigate('MyPageScreen');
  };

  return (
    <View>
      <View style={styles.cancleView}>
        <View style={{width: 50}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{width: 12, height: 12, marginRight: 40}}>
            <Image
              style={{width: 12, height: 12}}
              source={require('../asset/cancel.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text style={styles.checkedNumber}>{checkbox.length}개 선택됨</Text>
          {/* {checkbox.length} : 체크된 개수 보여주기 */}
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity
            style={{width: 19, height: 19}}
            onPress={() => {
              deleteMovieList();
            }}>
            <Image
              style={{width: 19, height: 19}}
              source={require('../asset/delete.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentsView}>
        <FlatList
          data={movielist}
          keyExtractor={(data, index) => index.toString()}
          numColumns={2}
          renderItem={({item, index}) => {
            // 주의 : 'index' 넣기
            return (
              <View key={item.id} style={styles.movieView}>
                <View>
                  <TouchableOpacity
                    style={styles.TouchableOpacity_one}
                    onPress={() => changeCheckBox(index)}>
                    {/* 영화 포스터 이미지 누르면 체크 표시 변경하기 */}
                    <Image source={item.poster} style={styles.moviePoster} />
                    <Text style={{color: 'white'}}>{item.title}</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    position: 'absolute',
                    width: 30,
                    height: 30,
                    left: 8,
                    top: 8,
                  }}>
                  <TouchableOpacity style={{height: 14}} onPress={() => {}}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={
                        returnCheckboxState(index)
                          ? require(checkedImg)
                          : require(notCheckedImg)
                      }
                    />
                    {/* 체크된 상태면 체크이미지 보여주고 
                    체크 안 된 상태면 빈 동그라미 이미지 보여주기 */}
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cancleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 15,
    marginRight: 15,
    height: 40,
  },
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
  checkedNumber: {
    color: 'white',
    fontSize: 20,
  },
});

export default ThirdRoute_delete;

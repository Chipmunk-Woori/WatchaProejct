import React, {useState} from 'react';
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
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

const ReviewScreen = ({navigation}, props) => {
  const [defaultRating, setdefaultRating] = useState(5);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

  const starImgFiled =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starImgCorner =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  const CustomRatingBar = () => {
    return (
      <View style={styles.CustomRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setdefaultRating(item)}>
              <Image
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                    ? {uri: starImgFiled}
                    : {uri: starImgCorner}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      <View style={styles.topView}>
        <View style={styles.topTextView}>
          <Text style={styles.topText}>평가하기</Text>
        </View>
        <View style={styles.topImageView}>
          <Image
            source={require('../asset/loupe_white.png')}
            style={styles.topImage}
          />
        </View>
      </View>
      <View style={styles.detailTextView}>
        <Text style={styles.detailTextFirst}>
          10개 이상의 작품에 평가를 하면,
        </Text>
        <Text style={styles.detailTextSecond}>
          내 취향에 딱 맞는 작품들을 추천 받을 수 있어요.
        </Text>
      </View>
      <View>
        <Text style={{color: 'white', marginLeft: 10}}>내 평가 수</Text>
      </View>
      <View style={styles.analysisView}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={styles.analysisnumber}>3</Text>
        </View>
        <View
          style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
          <Text style={styles.analysisText}>취향분석</Text>
        </View>
      </View>
      <View style={{borderTopColor: '#454545', borderWidth: 1}}></View>
      <View>
        <Text
          style={{color: 'red', fontSize: 13, marginLeft: 10, marginTop: 7}}>
          과거에 본 작품을 찾아 평가해보세요
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
        }}>
        <Image
          source={require('../asset/rectangle.png')}
          style={{width: 75, height: 75}}
        />
        <View>
          <Text style={{color: 'white'}}>김과장</Text>

          <Text style={{color: 'gray'}}>2017</Text>
          <View style={{flexDirection: 'row'}}>
            <CustomRatingBar />
            <Text style={styles.textStyle}>
              {defaultRating + ' / ' + maxRating.length}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            marginTop: 4,
            marginRight: 10,
          }}>
          <Image
            source={require('../asset/menu.png')}
            style={{width: 10, height: 10}}
          />
        </View>
      </View>
      <View
        style={{
          borderTopColor: '#454545',
          borderWidth: 1,
          marginTop: 13,
          marginBottom: 13,
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    marginTop: 25,
    width: '100%',
    marginBottom: 10,
  },
  topTextView: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  topImageView: {
    flex: 1,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  topText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  topImage: {
    width: 18,
    height: 18,
  },
  detailTextView: {
    backgroundColor: '#393939',
    marginBottom: 15,
  },
  detailTextFirst: {
    fontSize: 13,
    color: 'white',
    marginLeft: 10,
    marginTop: 15,
  },
  detailTextSecond: {
    fontSize: 13,
    color: 'white',
    marginLeft: 10,
    marginBottom: 15,
  },
  analysisView: {
    flexDirection: 'row',
  },
  analysisnumber: {
    fontSize: 40,
    color: 'white',
    marginLeft: 10,
  },
  analysisText: {
    color: 'red',
    marginRight: 10,
  },
  star: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  button: {
    backgroundColor: 'red',
  },
  CustomRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    marginTop: 20,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 15,
    backgroundColor: 'green',
  },
});

export default ReviewScreen;

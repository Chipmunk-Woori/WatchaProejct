import React, {useState, useEffect, useContext} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {UserContext} from '../Store/UserStore';

const EditProfileChoice = ({navigation}) => {
  const {userInformation, setUserInformation} = useContext(UserContext);
  // ↑ 공유된 값 원본
  const [editedName, setEditedName] = useState([]);
  // ↑ 이제 editedName 이 공유된 값 역할

  useEffect(() => {
    setEditedName(userInformation);
  }, []);

  useEffect(() => {
    console.log(editedName);
    console.log(userInformation);
  }, []);

  const userImage = () => {
    return (
      <View style={{alignItems: 'center', marginRight: 15}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../asset/user_circle.png')}
            style={styles.userCircle}
          />

          <Image source={require('../asset/user_1.png')} style={styles.user1} />
          <Image
            source={require('../asset/pencil.png')}
            style={styles.userModify}
          />
        </View>
        <Text style={{color: 'white'}}>
          {editedName.length > 0 && editedName[0].name}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.topView}>
        <Text style={styles.topView_Logo}>WATCHA</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.topView_completion}>완료</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.guideTextView}>
        <Text style={styles.guideText}>수정할 프로필을 선택해주세요</Text>
      </View>

      <View style={styles.userCircleView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditProfile', {
              userImage: userImage,
            });
          }}>
          {userImage()}
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{alignItems: 'center', marginRight: 15}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../asset/user_circle.png')}
                style={styles.userCircle}
              />

              <Image
                source={require('../asset/user_2.png')}
                style={styles.user1}
              />
            </View>
            <Text style={{color: 'white'}}>고래</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{alignItems: 'center', marginRight: 15}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../asset/user_circle.png')}
                style={styles.userCircle}
              />

              <Image
                source={require('../asset/plus.png')}
                style={styles.userPlus}
              />
            </View>
            <Text style={{color: 'white'}}>새 프로필</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  topView_Logo: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#F30064',
    fontWeight: 'bold',
  },
  topView_completion: {
    color: 'white',
    fontSize: 16,
    marginLeft: 230,
  },
  guideText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  guideTextView: {
    marginTop: 40,
    alignItems: 'center',
    marginBottom: 180,
  },
  userCircleView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userCircle: {
    width: 85,
    height: 85,
    marginBottom: 5,
    position: 'relative',
  },
  user1: {
    width: 55,
    height: 55,
    position: 'absolute',
  },
  userModify: {
    width: 30,
    height: 30,
    position: 'absolute',
  },
  userPlus: {
    width: 35,
    height: 35,
    position: 'absolute',
  },
});

export default EditProfileChoice;

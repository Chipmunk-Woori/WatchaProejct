import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {UserContext} from '../Store/UserStore';

const EditProfile = ({route, navigation}) => {
  const {userImage} = route.params;

  const [name1, setName1] = useState('');

  const {userInformation, setUserInformation} = useContext(UserContext);
  // ↑ 공유된 값 원본
  const [editedName, setEditedName] = useState([]);
  // ↑ 이제 editedName 이 공유된 값 역할

  useEffect(() => {
    setEditedName(userInformation);
    // ↑ 이제 editedName 이 공유된 값 역할

    setName1(userInformation.length > 0 && userInformation[0].name);
  }, []);

  return (
    <View>
      <View style={styles.topView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.backButton}>X</Text>
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          프로필 수정
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (userInformation.length > 0) {
              userInformation[0].name = name1;
            }
            navigation.navigate('EditProfileChoice');
          }}>
          <Text style={styles.topView_completion}>완료</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.userCircleView}>{userImage()}</View>

      <View>
        <TextInput
          style={styles.TextInputStyle}
          onChangeText={setName1}
          value={name1}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 5}}>
        <Text style={styles.guideText}>
          이름은 최소 2자, 최대 20자 까지 입력이 가능해요
        </Text>
        <Text style={styles.guideText}>
          수정한 정보는 왓챠의 다른 서비스에서도 동일하게
        </Text>
        <Text style={styles.guideText}>표시됩니다</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 15,
    alignItems: 'center',
  },
  backButton: {
    color: 'white',
    fontSize: 20,
    marginRight: 40,
  },
  topView_completion: {
    color: 'white',
    fontSize: 16,
    marginLeft: 170,
  },
  userCircleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 35,
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
  TextInputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    color: 'white',
  },
  guideText: {
    color: 'white',
  },
});

export default EditProfile;

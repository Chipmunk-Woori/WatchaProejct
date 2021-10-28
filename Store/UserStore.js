import React, {useState, useContext, useEffect, createContext} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

export const UserContext = createContext(null);

export const UserStore = ({children}) => {
  const [userInformation, setUserInformation] = useState([
    {
      id: '1',
      name: '호랑이',
    },
    {
      id: '2',
      name: '고래',
    },
  ]);

  const store = {
    userInformation,
    setUserInformation,
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

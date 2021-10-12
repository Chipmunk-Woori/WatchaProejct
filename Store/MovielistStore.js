import React, {createContext, useState} from 'react';

export const StoreContext = createContext(null);

export default ({children}) => {
  const [movielist, setMovieList] = useState([
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
  ]);

  const store = {
    movielist,
    setMovieList,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

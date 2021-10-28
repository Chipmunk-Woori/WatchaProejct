import React, {createContext, useState} from 'react';
import MovieDetailScreen from '../Screen/MovieDetailScreen';
import Recommendation from '../Screen/Recommendation';

export const MovieDetailContext = React.createContext();

export const MovieDetailStore = ({children}) => {
  const [dataList, setDataList] = useState([
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
  ]);

  const temp = {
    dataList,
    setDataList,
  };

  return (
    <MovieDetailContext.Provider value={temp}>
      {children}
    </MovieDetailContext.Provider>
  );
};

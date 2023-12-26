import * as React from 'react';

import {NavigationProp} from '@react-navigation/native';

import {HomeTemplate} from '../../templates';

import {filterData} from '../../global/data';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type HomeScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <HomeTemplate
      headingText="Destress your commute"
      subHeadingText="Read a book. Take a nap. Stare out the window"
      services={filterData}
    />
  );
};

export {HomeScreen};

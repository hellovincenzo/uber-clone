import * as React from 'react';
import {Text, Button} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {HomeTemplate} from '../../templates';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type HomeScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <HomeTemplate>
      <Text>This is the home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </HomeTemplate>
  );
};

export {HomeScreen};

import * as React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

import {NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type DetailsScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'Details'>;
};

const DetailsScreen: React.FC<DetailsScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Details Screen</Text>

        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export {DetailsScreen};

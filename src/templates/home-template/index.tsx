import React, {ReactNode} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

export interface HomeTemplateProps {
  children: ReactNode;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export {HomeTemplate};

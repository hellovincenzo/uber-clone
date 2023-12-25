import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors, parameters} from '../../global/styles';

export interface HomeTemplateProps {
  children: ReactNode;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon1}>
          <Icon name="menu" color={colors.white} size={40} />
        </View>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
  },
  header: {
    backgroundColor: colors.blue,
    height: parameters.headerHeight,
    alignItems: 'flex-start',
  },
  icon1: {marginLeft: 10, marginTop: 5},
});

export {HomeTemplate};

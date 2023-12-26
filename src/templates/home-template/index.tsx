import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors, parameters} from '../../global/styles';

export interface HomeTemplateProps {
  headingText: string;
  subHeadingText: string;
  services: {
    id: number;
    name: string;
    image: any;
  }[];
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({
  headingText,
  subHeadingText,
  services,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
        <View style={styles.blueContainer}>
          <View style={styles.blueContainerTop}>
            <View style={styles.iconMenu}>
              <Icon name="menu" color={colors.white} size={40} />
            </View>
          </View>
          <View style={styles.blueTextContainer}>
            <Text style={styles.headingText}>{headingText}</Text>
            <Text style={styles.subHeadingText}>{subHeadingText}</Text>
          </View>
          <View style={styles.blueContainerBottom}>
            <TouchableOpacity onPress={() => null}>
              <View style={styles.rideWithUberBtn}>
                <Text style={styles.rideWithUberBtnText}>Ride with Uber</Text>
              </View>
            </TouchableOpacity>
            <Image
              style={styles.uberCarImg}
              source={require('../../../assets/uberCar.png')}
            />
          </View>
        </View>

        <FlatList
          contentContainerStyle={styles.serviceContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={services}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <View style={styles.serviceCard}>
              <View style={styles.serviceCardImageContainer}>
                <Image style={styles.serviceCardImage} source={item.image} />
              </View>
              <View style={styles.serviceTextContainer}>
                <Text style={styles.serviceText}>{item.name}</Text>
              </View>
            </View>
          )}
        />

        <View style={styles.whereContainer}>
          <Text style={styles.whereText}>Where to ?</Text>
          <View style={styles.whereItemRightContainer}>
            <Icon
              style={styles.whereItemRightClockIcon}
              name="clock-time-four"
              color={colors.grey1}
              size={26}
            />
            <Text style={styles.whereItemRightText}>Now</Text>
            <Icon
              style={styles.whereItemRightChevronIcon}
              name="chevron-down"
              color={colors.grey1}
              size={26}
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#2058c0" translucent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
  },
  blueContainer: {
    backgroundColor: colors.blue,
    paddingLeft: 20,
  },
  blueContainerTop: {
    backgroundColor: colors.blue,
    height: parameters.headerHeight,
    alignItems: 'flex-start',
  },
  iconMenu: {
    marginTop: 5,
  },
  blueTextContainer: {
    paddingTop: 20,
  },
  headingText: {
    color: colors.white,
    fontSize: 21,
    marginBottom: 30,
  },
  subHeadingText: {
    color: colors.white,
    fontSize: 16,
  },
  blueContainerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rideWithUberBtn: {
    height: 40,
    width: 150,
    backgroundColor: colors.black,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rideWithUberBtnText: {
    color: colors.white,
    fontSize: 17,
  },

  uberCarImg: {
    height: 100,
    width: 100,
  },

  // SERVICE SECTION START
  serviceContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  serviceCard: {
    alignItems: 'center',
  },

  serviceCardImageContainer: {
    marginBottom: 5,
    borderRadius: 15,
    backgroundColor: colors.grey6,
  },
  serviceCardImage: {height: 60, width: 60, borderRadius: 30},
  serviceTextContainer: {},
  serviceText: {
    color: colors.black,
    fontSize: 16,
  },
  // SECTION SERVICE END

  // WHERE SECTION START
  whereContainer: {
    height: 50,
    flex: 1,
    margin: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.grey6,
  },
  whereText: {
    fontSize: 20,
    color: colors.black,
  },
  whereItemRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 30,
    width: 120,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  whereItemRightClockIcon: {},
  whereItemRightText: {},
  whereItemRightChevronIcon: {},
  // WHERE SECTION END
});

export {HomeTemplate};

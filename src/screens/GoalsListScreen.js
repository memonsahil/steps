import React from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import {
  alabaster,
  flame,
  marigold,
  mellowApricot,
  white,
  raisinBlack,
  fulvous,
} from "../assets/Theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ActiveGoalSection from "../components/ActiveGoalSection";
import { Header, Icon } from "react-native-elements";

const width = Dimensions.get("window").width;

const goals = [
  { id: 1, steps: 7000 },
  { id: 2, steps: 4800 },
  { id: 3, steps: 18000 },
  { id: 4, steps: 15000 },
  { id: 5, steps: 9000 },
  { id: 6, steps: 25000 },
  { id: 7, steps: 3000 },
];

const GoalsListScreen = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Header
            statusBarProps={styles.statusBar}
            centerComponent={{ text: "Goals", style: styles.headerTitle }}
            leftComponent={
              <Icon
                type="ionicon"
                name="chevron-back"
                size={hp(4)}
                color={alabaster}
                onPress={() => navigation.goBack()}
              />
            }
            containerStyle={styles.header}
          />
          <ActiveGoalSection />
          <View style={styles.InactiveGoalSection}>
            <View style={styles.titleRegion}>
              <Text style={styles.title}>Inactive Goals</Text>
            </View>
            <View style={styles.seperator} />
          </View>
        </>
      }
      bounces={false}
      showsVerticalScrollIndicator={false}
      data={goals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <>
          <View style={styles.contentRegion}>
            <TouchableOpacity>
              <View style={styles.goal}>
                <Text style={styles.steps}>{item.steps} Steps</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
      ListFooterComponent={
        <>
          <View style={styles.contentRegionBase} />
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: raisinBlack,
  },
  header: {
    backgroundColor: fulvous,
    marginBottom: hp(1.5),
  },
  headerTitle: {
    fontFamily: "Merriweather-Bold",
    fontSize: fp(3.25),
    color: alabaster,
  },
  InactiveGoalSection: {
    width: width - wp(5),
    alignSelf: "center",
  },
  titleRegion: {
    height: hp(8),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: marigold,
  },
  title: {
    fontFamily: "Merriweather-Bold",
    fontSize: fp(2.75),
    color: white,
    marginTop: hp(2),
    marginLeft: wp(3),
  },
  seperator: {
    height: hp(0.5),
    backgroundColor: alabaster,
  },
  contentRegion: {
    backgroundColor: mellowApricot,
    paddingTop: hp(2),
    width: width - wp(5),
    alignSelf: "center",
  },
  goal: {
    marginHorizontal: wp(3.5),
    backgroundColor: flame,
    borderRadius: 10,
  },
  steps: {
    fontFamily: "Merriweather-Regular",
    fontSize: fp(2.6),
    color: white,
    textAlign: "center",
    paddingVertical: hp(2),
  },
  contentRegionBase: {
    height: hp(2),
    width: width - wp(5),
    alignSelf: "center",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: mellowApricot,
    marginBottom: hp(1.5),
  },
});

export default GoalsListScreen;

import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
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
} from "../assets/Theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const width = Dimensions.get("window").width;

const ActiveGoalSection = () => {
  // TouchableOpacity - onPress={() => activate bottom sheet from react-native-elements}
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleRegion}>
        <Text style={styles.title}>Active Goal</Text>
      </View>
      <View style={styles.seperator} />
      <View style={styles.contentRegion}>
        <TouchableOpacity>
          <View style={styles.goal}>
            <Text style={styles.steps}>10000 Steps</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: width - wp(5),
    alignSelf: "center",
    marginBottom: hp(1.5),
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
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: mellowApricot,
  },
  goal: {
    marginVertical: hp(2),
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
});

export default ActiveGoalSection;

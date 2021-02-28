import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import {
  alabaster,
  copperCrayola,
  flame,
  marigold,
  mellowApricot,
  white,
} from "../assets/Theme";
import { Icon, Button } from "react-native-elements";

const width = Dimensions.get("window").width;

const ActivitySection = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleRegion}>
        <Text style={styles.title}>Activity Details</Text>
      </View>
      <View style={styles.seperator} />
      <View style={styles.contentRegion}>
        <View style={styles.goal}>
          <Text style={styles.steps}>10000 Steps</Text>
        </View>
        <View style={styles.infoRegion}>
          <View>
            <Icon
              reverse
              name="walk"
              type="material-community"
              size={hp(4)}
              color={flame}
            />
            <Text style={styles.info}>18000{"\n"}Steps</Text>
          </View>
          <View>
            <Icon
              reverse
              name="progress-check"
              type="material-community"
              size={hp(4)}
              color={flame}
            />
            <Text style={styles.info}>Goal{"\n"}Achieved</Text>
          </View>
          <View>
            <Icon
              reverse
              name="shoe-print"
              type="material-community"
              size={hp(4)}
              color={flame}
            />
            <Text style={styles.info}>124%{"\n"}Completed</Text>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Edit Activity"
            raised={true}
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.button}
            onPress={() => navigation.navigate()}
          />
        </View>
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
  infoRegion: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  info: {
    fontFamily: "Merriweather-Regular",
    fontSize: fp(2.1),
    color: white,
    textAlign: "center",
  },
  buttonWrapper: {
    marginTop: hp(3),
    marginBottom: hp(2),
    alignSelf: "center",
  },
  buttonTitle: {
    fontSize: fp(2.5),
    fontFamily: "Merriweather-Bold",
    color: white,
  },
  button: {
    height: hp(7),
    width: wp(60),
    borderRadius: 25,
    backgroundColor: copperCrayola,
  },
});

export default ActivitySection;

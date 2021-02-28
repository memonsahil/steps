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
import { Icon } from "react-native-elements";
import ProgressBar from "react-native-progress/Bar";

const width = Dimensions.get("window").width;

const ProgressSection = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleRegion}>
        <Text style={styles.title}>Progress</Text>
      </View>
      <View style={styles.seperator} />
      <View style={styles.contentRegion}>
        <ProgressBar
          progress={0.8}
          height={hp(8)}
          width={wp(88)}
          borderRadius={18}
          color={flame}
          unfilledColor={copperCrayola}
          borderColor={alabaster}
          borderWidth={3}
          style={styles.progressBar}
        />
        <View style={styles.infoRegion}>
          <View>
            <Icon
              reverse
              name="walk"
              type="material-community"
              size={hp(4)}
              color={flame}
            />
            <Text style={styles.info}>
              Goal:{"\n"}10000{"\n"}Steps
            </Text>
          </View>
          <View>
            <Icon
              reverse
              name="progress-check"
              type="material-community"
              size={hp(4)}
              color={flame}
            />
            <Text style={styles.info}>Progress:{"\n"}80%</Text>
          </View>
          <View>
            <Icon
              reverse
              name="shoe-print"
              type="material-community"
              size={hp(4)}
              color={flame}
            />
            <Text style={styles.info}>
              Steps{"\n"}Taken:{"\n"}8000
            </Text>
          </View>
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
  progressBar: {
    alignSelf: "center",
    marginVertical: hp(2),
  },
  infoRegion: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: hp(2),
  },
  info: {
    fontFamily: "Merriweather-Regular",
    fontSize: fp(2.1),
    color: white,
    textAlign: "center",
  },
});

export default ProgressSection;

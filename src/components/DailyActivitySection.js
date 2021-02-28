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
import { BarChart } from "react-native-chart-kit";

const width = Dimensions.get("window").width;

const data = {
  labels: ["00", "03", "06", "09", "12", "15", "18", "21", "00"],
  datasets: [
    {
      data: [400, 452, 286, 892, 1055, 344, 956, 670, 832],
    },
  ],
};

const DailyActivitySection = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleRegion}>
        <Text style={styles.title}>Daily Activity</Text>
      </View>
      <View style={styles.seperator} />
      <View style={styles.contentRegion}>
        <BarChart
          data={data}
          width={width - wp(5)}
          height={hp(35)}
          chartConfig={{
            barPercentage: 0.5,
            decimalPlaces: 0,
            backgroundGradientFrom: copperCrayola,
            backgroundGradientTo: copperCrayola,
            fillShadowGradient: flame,
            fillShadowGradientOpacity: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          style={{}}
        />
        <View style={styles.seperator} />
        <Text style={styles.info}>Your hourly activity data.</Text>
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
  info: {
    fontFamily: "Merriweather-Regular",
    fontSize: fp(2.1),
    color: white,
    marginLeft: wp(3),
    marginVertical: hp(2),
  },
});

export default DailyActivitySection;

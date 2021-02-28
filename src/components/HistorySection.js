import React, { useState } from "react";
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
import { ButtonGroup } from "react-native-elements";

const width = Dimensions.get("window").width;

const weeklyData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      data: [4200, 552, 2860, 1200, 1055, 3044, 956],
    },
  ],
};

const monthlyData = {
  labels: ["01", "05", "10", "15", "20", "25", "30"],
  datasets: [
    {
      data: [5500, 4520, 3386, 2892, 1055, 3484, 3956, 2570, 4532],
    },
  ],
};

const yearlyData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [
        20000,
        18600,
        21500,
        9600,
        15400,
        18900,
        7044,
        9800,
        8320,
        3450,
        16540,
        15000,
      ],
    },
  ],
};

const HistorySection = () => {
  const [buttonIndex, setButtonIndex] = useState(0);
  const buttons = ["Weekly", "Monthly", "Yearly"];

  return (
    <View style={styles.wrapper}>
      <View style={styles.titleRegion}>
        <Text style={styles.title}>History</Text>
      </View>
      <View style={styles.seperator} />
      <View>
        <BarChart
          data={weeklyData}
          width={width - wp(5)}
          height={hp(35)}
          chartConfig={{
            barPercentage: 0.5, // 0.5 for monthlyData & weeklyData, 0.3 for yearlyData
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
        <ButtonGroup
          onPress={setButtonIndex} // update BarChart data depending on the button index
          selectedIndex={buttonIndex}
          buttons={buttons}
          containerStyle={styles.buttonGroup}
          buttonStyle={styles.button}
          selectedButtonStyle={styles.selectedButton}
          textStyle={styles.buttonText}
        />
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
  buttonGroup: {
    height: hp(5.5),
    width: width - wp(5),
    alignSelf: "center",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginTop: hp(0),
  },
  button: {
    backgroundColor: copperCrayola,
  },
  selectedButton: {
    backgroundColor: flame,
  },
  buttonText: {
    fontFamily: "Merriweather-Regular",
    fontSize: fp(2.1),
    color: white,
  },
});

export default HistorySection;

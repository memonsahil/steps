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
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;

const trackedDates = {
  "2021-02-01": {
    customStyles: {
      container: {
        backgroundColor: flame,
        justifyContent: "center",
      },
    },
  },
  "2021-02-24": {
    customStyles: {
      container: {
        backgroundColor: flame,
        justifyContent: "center",
      },
    },
  },
  "2021-02-25": {
    customStyles: {
      container: {
        backgroundColor: flame,
        justifyContent: "center",
      },
    },
  },
};

const CalendarSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.titleRegion}>
        <Text style={styles.title}>Calendar</Text>
      </View>
      <View style={styles.seperator} />
      <View style={styles.contentRegion}>
        <Calendar
          markedDates={trackedDates}
          markingType={"custom"}
          onDayPress={(day) => {
            console.log(day);
            navigation.navigate("ViewActivity");
          }}
          theme={{
            "stylesheet.calendar.header": {
              monthText: {
                fontSize: fp(2.5),
                fontFamily: "Merriweather-Regular",
                color: white,
              },
              dayHeader: {
                fontSize: fp(2),
                fontFamily: "Merriweather-Regular",
                color: white,
              },
              arrowImage: {
                tintColor: white,
                height: hp(7),
                width: wp(7),
              },
            },
            "stylesheet.calendar.main": {
              container: {
                backgroundColor: copperCrayola,
              },
              monthView: {
                backgroundColor: copperCrayola,
              },
            },
            "stylesheet.day.basic": {
              text: {
                fontSize: fp(2.1),
                fontFamily: "Merriweather-Regular",
                color: white,
              },
              todayText: {
                color: white,
              },
              today: {
                backgroundColor: marigold,
                borderRadius: 16,
                justifyContent: "center",
              },
            },
          }}
        />
        <View style={styles.seperator} />
        <Text style={styles.info}>Pick a day to view your activity.</Text>
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

export default CalendarSection;

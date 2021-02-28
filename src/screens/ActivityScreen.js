import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "react-native-elements";
import { alabaster, fulvous, raisinBlack } from "../assets/Theme";
import HistorySection from "../components/HistorySection";
import CalendarSection from "../components/CalendarSection";

const ActivityScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Header
          statusBarProps={styles.statusBar}
          centerComponent={{ text: "Activity", style: styles.title }}
          containerStyle={styles.header}
        />
        <HistorySection />
        <CalendarSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: alabaster,
  },
  header: {
    backgroundColor: fulvous,
    marginBottom: hp(1.5),
  },
  statusBar: {
    backgroundColor: raisinBlack,
  },
  title: {
    fontFamily: "Merriweather-Bold",
    fontSize: fp(3.25),
    color: alabaster,
  },
});

export default ActivityScreen;

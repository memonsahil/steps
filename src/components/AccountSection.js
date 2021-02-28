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
import { Button, Icon } from "react-native-elements";

const width = Dimensions.get("window").width;

const AccountSection = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleRegion}>
        <Text style={styles.title}>Account</Text>
      </View>
      <View style={styles.seperator} />
      <View style={styles.contentRegion}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Edit Profile"
            raised={true}
            titleStyle={styles.buttonTitle}
            icon={
              <Icon type="font-awesome" name="user" size={hp(4)} color={flame} />
            }
            iconRight={true}
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
    paddingTop: hp(2),
  },
  buttonWrapper: {
    marginBottom: hp(1.5),
    alignSelf: "center",
    marginBottom: hp(2),
  },
  buttonTitle: {
    fontSize: fp(2.5),
    fontFamily: "Merriweather-Bold",
  },
  button: {
    height: hp(7),
    width: wp(90),
    borderRadius: 12,
    backgroundColor: copperCrayola,
    justifyContent: "space-between",
  },
});

export default AccountSection;

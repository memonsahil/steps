import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { marigold, mellowApricot, white } from "../assets/Theme";
import { Avatar } from "react-native-elements";

const width = Dimensions.get("window").width;

const ProfileSection = () => {
  return (
    <View style={styles.wrapper}>
      <Avatar
        size="large"
        rounded
        icon={{ name: "user", type: "font-awesome" }}
        containerStyle={styles.avatar}
      />
      <View style={styles.userDetail}>
        <Text style={styles.heading}>Name:</Text>
        <Text style={styles.info}>First Last</Text>
      </View>
      <View style={styles.userDetail}>
        <Text style={styles.heading}>Age:</Text>
        <Text style={styles.info}>21</Text>
      </View>
      <View style={styles.userDetail}>
        <Text style={styles.heading}>Lifestyle:</Text>
        <Text style={styles.info}>Active</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: width - wp(5),
    alignSelf: "center",
    borderRadius: 12,
    backgroundColor: mellowApricot,
  },
  avatar: {
    alignSelf: "center",
    backgroundColor: marigold,
    marginTop: hp(3),
    marginBottom: hp(4),
  },
  userDetail: {
    flexDirection: "row",
    marginBottom: hp(2),
    marginLeft: wp(5),
  },
  heading: {
    fontFamily: "Merriweather-Bold",
    fontSize: fp(2.75),
    color: white,
  },
  info: {
    fontFamily: "Merriweather-Regular",
    fontSize: fp(2.5),
    color: white,
    marginLeft: wp(2),
    textAlign: "justify",
  },
});

export default ProfileSection;

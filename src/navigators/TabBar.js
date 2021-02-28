import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { fulvous, raisinBlack, white } from "../assets/Theme";
import GoalsStack from "../navigators/GoalsStack";
import ActivityStack from "../navigators/ActivityStack";
import ProfileStack from "../navigators/ProfileStack";

const TabBar = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    let iconColor;

                    if (route.name === "Goals") {
                        iconName = "walking";
                        iconColor = focused ? white : raisinBlack;
                    } else if (route.name === "Activity") {
                        iconName = "history";
                        iconColor = focused ? white : raisinBlack;
                    } else if (route.name === "Profile") {
                        iconName = "user-circle"
                        iconColor = focused ? white : raisinBlack;
                    }

                    return <Icon type="font-awesome-5" name={iconName} size={hp(3)} color={iconColor} />;
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: fulvous,
                },
                activeTintColor: white,
                inactiveTintColor: raisinBlack,
                labelStyle: {
                    fontFamily: "Merriweather-Bold",
                    fontSize: fp(1.4),
                },
            }}
        >
            <Tab.Screen name="Goals" component={GoalsStack} />
            <Tab.Screen name="Activity" component={ActivityStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
    );
};

export default TabBar;

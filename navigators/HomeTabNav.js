import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
    createMaterialTopTabNavigator,
    MaterialTopTabBar,
} from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Top from "../screens/Top";
import National from "../screens/National";
import Covid from "../screens/Covid";
import Navbar from "../components/Navbar";

const HomeTabNav = ({ navigation }) => {
    const CustomTopBar = (props) => {
        return (
            <SafeAreaView>
                <Navbar screenName="Home" />
                <MaterialTopTabBar {...props} />
            </SafeAreaView>
        );
    };

    return (
        <Tab.Navigator
            tabBarOptions={{
                tabStyle: {
                    height: 60,
                    // marginTop: 40,
                },
                style: {
                    backgroundColor: "#121212",
                },
                activeTintColor: "#86DAFC",
                indicatorStyle: {
                    backgroundColor: "#86DAFC",
                },
            }}
            tabBar={CustomTopBar}
        >
            <Tab.Screen name="Top" component={Top} />
            <Tab.Screen name="National" component={National} />
            <Tab.Screen name="Covid" component={Covid} />
        </Tab.Navigator>
    );
};

const Tab = createMaterialTopTabNavigator();

export default HomeTabNav;

const styles = StyleSheet.create({});

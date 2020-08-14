import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Sports from "../screens/Sports";
import Search from "../screens/Search";
import Science from "../screens/Science";
import Politics from "../screens/Politics";
import Entertainment from "../screens/Entertainment";
import Health from "../screens/Health";
import HomeTabNav from "./HomeTabNav";

const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home  " component={HomeTabNav} />
            <Stack.Screen name="Search  " component={Search} />
        </Stack.Navigator>
    );
};

export const SportsStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Sports  " component={Sports} />
            <Stack.Screen name="Search  " component={Search} />
        </Stack.Navigator>
    );
};

export const ScienceStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Science  " component={Science} />
            <Stack.Screen name="Search  " component={Search} />
        </Stack.Navigator>
    );
};

export const PoliticsStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Politics  " component={Politics} />
            <Stack.Screen name="Search  " component={Search} />
        </Stack.Navigator>
    );
};

export const EntertainmentStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Entertainment  " component={Entertainment} />
            <Stack.Screen name="Search  " component={Search} />
        </Stack.Navigator>
    );
};

export const HealthStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Health  " component={Health} />
            <Stack.Screen name="Search  " component={Search} />
        </Stack.Navigator>
    );
};
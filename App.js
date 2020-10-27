import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AppLoading } from "expo";
import { Ionicons } from "@expo/vector-icons";

import moment from "moment";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Bookmarks from "./screens/Bookmarks";
import HomeTabNav from "./navigators/HomeTabNav";
import CustomDrawer from "./components/CustomDrawer";

import {
    useFonts,
    Montserrat_500Medium,
    Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import {
    Raleway_400Regular,
    Raleway_500Medium,
} from "@expo-google-fonts/raleway";
import Sports from "./screens/Sports";
import Science from "./screens/Science";
import Politics from "./screens/Politics";
import Entertainment from "./screens/Entertainment";
import Health from "./screens/Health";
import Search from "./screens/Search";
import {
    SportsStack,
    HomeStack,
    ScienceStack,
    PoliticsStack,
    HealthStack,
    EntertainmentStack,
} from "./navigators/StacksNavs";
console.log(moment().subtract(7, 'd').toISOString());

export default function App({ navigation }) {
    let [fontsloaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular,
        Raleway_400Regular,
        Raleway_500Medium,
    });

    if (!fontsloaded) {
        return <AppLoading />;
    } else {
        return (
            <NavigationContainer>
                <Drawer.Navigator
                    drawerStyle={styles.drawerStyle}
                    initialRouteName="Home"
                    drawerContent={(props) => <CustomDrawer {...props} />}
                    drawerContentOptions={{
                        activeTintColor: "#86DAFC",
                        inactiveTintColor: "#C1E1EE",
                        labelStyle: {
                            width: "100%",
                            fontFamily: "Raleway_500Medium",
                            fontSize: 14,
                        },
                        itemStyle: {
                            width: "100%",
                        },
                    }}
                >
                    <Drawer.Screen name="Home  " component={HomeStack} />
                    <Drawer.Screen name="Sports  " component={SportsStack} />
                    <Drawer.Screen name="Science  " component={ScienceStack} />
                    <Drawer.Screen
                        name="Politics  "
                        component={PoliticsStack}
                    />
                    <Drawer.Screen
                        name="Entertainment  "
                        component={EntertainmentStack}
                    />
                    <Drawer.Screen name="Health  " component={HealthStack} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        alignItems: "center",
        justifyContent: "center",
    },
    drawerStyle: {
        backgroundColor: "#121212",
        elevation: 6,
    },
    headerStyle: {
        backgroundColor: "#121212",
        height: 100,
        elevation: 0,
    },
});

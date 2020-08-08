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

export default function App({ navigation }) {
    let [fontsloaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular,
        Raleway_400Regular,
        Raleway_500Medium,
    });

    // console.log(moment("2019-08-06T16:00:40Z").fromNow());

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
                    <Drawer.Screen name="Home  " component={HomeTabNav} />
                    <Drawer.Screen name="Bookmarks  " component={Bookmarks} />
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

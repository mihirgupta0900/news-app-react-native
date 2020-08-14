import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { AppLoading } from "expo";

const Navbar = ({ screenName }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.main}>
            <View style={styles.menuIcon}>
                <TouchableWithoutFeedback
                    onPress={() => navigation.openDrawer()}
                >
                    <Ionicons name="ios-menu" size={35} color="white" />
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.titleView}>
                <Text style={styles.title}>{screenName}</Text>
            </View>
            <View style={styles.searchIcon}>
                <Ionicons
                    name="ios-search"
                    size={30}
                    onPress={() => navigation.navigate("Search  ")}
                    color="white"
                />
            </View>
        </View>
    );
};

export default Navbar;

const styles = StyleSheet.create({
    main: {
        height: 80,
        backgroundColor: "#121212",
        color: "#fff",
        // borderColor: "white",
        // borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    menuIcon: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
    },
    searchIcon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        flex: 1,
    },
    titleView: {
        flex: 5,
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 24,
        fontFamily: "Montserrat_500Medium",
    },
});

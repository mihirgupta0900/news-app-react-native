import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { AppLoading } from "expo";

const SearchNavbar = ({ setState, state, onSubmitFn }) => {
    const navigation = useNavigation();
    // const [text, setText] = useState("");
    return (
        <View style={styles.main}>
            <View style={styles.menuIcon}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    {/* <Ionicons name="ios-menu" size={35} color="white" /> */}
                    <Ionicons name="md-arrow-back" size={30} color="white" />
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.titleView}>
                {/* <Text style={styles.title}>search</Text> */}
                <TextInput
                    style={styles.textInput}
                    value={state}
                    onChangeText={(newText) => setState(newText)}
                    autoFocus={true}
                    placeholder="Search"
                    onSubmitEditing={() => onSubmitFn()}
                />
            </View>
            {/* <View style={styles.searchIcon}>
                <Ionicons
                    name="ios-search"
                    size={30}
                    onPress={() => navigation.navigate("Search  ")}
                    color="white"
                />
            </View> */}
        </View>
    );
};

export default SearchNavbar;

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
        flex: 8,
        marginRight: 6,
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 24,
        fontFamily: "Montserrat_500Medium",
    },
    textInput: {
        // borderColor: "white",
        // borderWidth: 1,
        backgroundColor: "#2C2C2C",
        borderRadius: 5,
        height: 40,
        paddingHorizontal: 10,
        fontSize: 14,
        fontFamily: "Raleway_400Regular",
        color: "rgba(255,255,255,0.8)",
        letterSpacing: 0.25,
    },
});

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { borderRadius } from "../constants";
import * as WebBrowser from "expo-web-browser";

import moment from "moment";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Card = ({ title, imgSrc, publishedAt, url }) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => WebBrowser.openBrowserAsync(url)}
        >
            <View style={styles.container}>
                <View style={styles.textArea}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <View style={styles.bottomText}>
                        <Text style={styles.publishedDate}>
                            {moment(publishedAt).fromNow()}
                        </Text>
                        {/* <MaterialCommunityIcons
                        name="bookmark-outline"
                        style={styles.bookmarkStyle}
                        size={34}
                        color="white"
                    /> */}
                    </View>
                </View>
                <View style={styles.imgView}>
                    <Image
                        source={{
                            uri: imgSrc,
                        }}
                        style={styles.imgStyle}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#1E1E1E",
        marginTop: 4,
        display: "flex",
        flexDirection: "row",
        minHeight: 110,
        borderRadius: borderRadius,
    },
    textArea: {
        flex: 4,
        // borderColor: "white",
        // borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 8,
        display: "flex",
        justifyContent: "space-between",
    },
    imgView: {
        flex: 3,
        // borderColor: "white",
        // borderWidth: 1,
    },
    cardTitle: {
        fontFamily: "Raleway_400Regular",
        fontSize: 16,
        opacity: 87,
        color: "rgba(255,255,255,0.87)",
    },
    bottomText: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    publishedDate: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 14,
        fontFamily: "Raleway_400Regular",
        marginTop: 6,
    },
    bookmarkStyle: {
        opacity: 0.6,
    },
    imgStyle: {
        width: "100%",
        minHeight: 110,
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
    },
});

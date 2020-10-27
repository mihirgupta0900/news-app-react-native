import React, { PureComponent } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

import { borderRadius } from "../constants";

import moment from "moment";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

class TopCard extends PureComponent {
    render() {
        const { imageUrl, title, publishedAt, url } = this.props;
        return (
            <TouchableWithoutFeedback
                onPress={() => WebBrowser.openBrowserAsync(url)}
            >
                <View style={styles.main}>
                    <View style={styles.pic}>
                        {imageUrl === "" ? (
                            <Text>No Image Available</Text>
                        ) : (
                            <Image
                                source={{
                                    uri: imageUrl,
                                }}
                                style={styles.imgStyle}
                            />
                        )}
                    </View>
                    <View style={styles.textArea}>
                        <View
                            style={{
                                paddingVertical: 5,
                                paddingHorizontal: 25,
                            }}
                        >
                            <View style={styles.cardTitleView}>
                                <Text style={styles.cardTitle}>{title}</Text>
                                {/* <View style={styles.bookmarkView}> */}
                                {/* <MaterialCommunityIcons
                            name="bookmark-outline"
                            style={styles.bookmarkStyle}
                            size={34}
                            color="white"
                        /> */}
                                {/* </View> */}
                            </View>
                            <View style={styles.textBottomView}>
                                <Text style={styles.publishedDate}>
                                    {moment(publishedAt).fromNow()}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

// const TopCard = ({ imageUrl, title, publishedAt, url }) => {
//     return (
//         <TouchableWithoutFeedback
//             onPress={() => WebBrowser.openBrowserAsync(url)}
//         >
//             <View style={styles.main}>
//                 <View style={styles.pic}>
//                     {imageUrl === "" ? (
//                         <Text>No Image Available</Text>
//                     ) : (
//                         <Image
//                             source={{
//                                 uri: imageUrl,
//                             }}
//                             style={styles.imgStyle}
//                         />
//                     )}
//                 </View>
//                 <View style={styles.textArea}>
//                     <View style={{ paddingVertical: 5, paddingHorizontal: 25 }}>
//                         <View style={styles.cardTitleView}>
//                             <Text style={styles.cardTitle}>{title}</Text>
//                             {/* <View style={styles.bookmarkView}> */}
//                             {/* <MaterialCommunityIcons
//                             name="bookmark-outline"
//                             style={styles.bookmarkStyle}
//                             size={34}
//                             color="white"
//                         /> */}
//                             {/* </View> */}
//                         </View>
//                         <View style={styles.textBottomView}>
//                             <Text style={styles.publishedDate}>
//                                 {moment(publishedAt).fromNow()}
//                             </Text>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         </TouchableWithoutFeedback>
//     );
// };

export default TopCard;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        display: "flex",
        backgroundColor: "#1E1E1E",
        borderRadius: borderRadius,
    },
    pic: {
        // flex: 3,
    },
    textArea: {
        minHeight: 60,
        borderBottomEndRadius: 4,
        overflow: "hidden",
        borderBottomStartRadius: 4,
        display: "flex",
        justifyContent: "space-between",
        marginVertical: 5,
        // paddingTop: 6,
    },
    cardTitleView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    cardTitle: {
        color: "rgba(255,255,255,0.87)",
        fontFamily: "Raleway_400Regular",
        fontSize: 16,
        flex: 11,
    },
    bookmarkStyle: {
        opacity: 0.6,
        flex: 1,
    },
    textBottomView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 6,
        marginBottom: 1,
        // borderColor: "white",
        // borderWidth: 1,
    },
    publishedDate: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 14,
        fontFamily: "Raleway_400Regular",
    },
    imgStyle: {
        width: "100%",
        height: 200,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
    },
});

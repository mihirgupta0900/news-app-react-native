import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Loading = () => {
    return (
        <View style={styles.loading}>
            <Image
                source={require("../assets/infinity-loading-121212.gif")}
                // height={50}
                // width={50}
                style={{
                    height: 300,
                    width: 300,
                }}
            />
        </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
    loading: {
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 1,
        // borderColor: 'white',
        height: "90%",
    },
});

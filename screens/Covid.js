import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Covid = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Covid Screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default Covid;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        alignItems: "center",
        justifyContent: "center",
    },
});

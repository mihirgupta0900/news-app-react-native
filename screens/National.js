import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const National = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>National Screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default National;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        alignItems: "center",
        justifyContent: "center",
    },
});

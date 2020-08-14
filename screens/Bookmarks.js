import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { testData } from "../constants";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const Bookmarks = ({ navigation }) => {
    const renderArticle = ({ item }) => (
        <Card title={item.title} imgSrc={item.urlToImage} />
    );
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Navbar screenName="Bookmarks" />
                <FlatList
                    data={testData.articles}
                    renderItem={renderArticle}
                    keyExtractor={(item) => Math.random().toString()}
                />
                <StatusBar
                    translucent
                    backgroundColor="#121212"
                    barStyle="light-content"
                    style="light"
                />
            </View>
        </SafeAreaView>
    );
};

export default Bookmarks;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "#121212",
    },
});

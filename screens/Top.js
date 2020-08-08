import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import TopCard from "../components/TopCard";
import Card from "../components/Card";
import { testData } from "../constants";
import { renderArticle } from "../helpers/renderArticle";

// import { NEWSAPI_KEY } from "react-native-dotenv";

const Top = ({ navigation }) => {
    testData.articles[0].first = true;

    const [articleData, setArticleData] = useState(undefined);

    const fetchArticles = () => {
        return fetch("https://newsapi.org/v2/top-headlines?q=news", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer 93c4224f4a6243a2894e96109800be65`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log("DATA ===> ", data);
                return setArticleData(data);
            })
            .catch((err) => console.log(err));
    };

    fetchArticles()

    console.log(articleData);

    return (
        <View style={styles.container}>
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
    );
};

export default Top;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        paddingHorizontal: 5,
        paddingTop: 4,
    },
});

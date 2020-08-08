import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import TopCard from "../components/TopCard";
import Card from "../components/Card";
import { testData } from "../constants";
import { renderArticle } from "../helpers/renderArticle";

import getEnvVars from "../environment";

const { newsApiKey } = getEnvVars();

const Top = ({ navigation }) => {
    // testData.articles[0].first = true;

    const [articleData, setArticleData] = useState(undefined);

    const fetchArticles = () => {
        return fetch("https://newsapi.org/v2/top-headlines?q=news", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${newsApiKey}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log("DATA ===> ", data);
                data.articles[0].first = true;
                return setArticleData(data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    // console.log(articleData);

    return (
        <View style={styles.container}>
            {articleData ? (
                <FlatList
                    data={articleData.articles}
                    renderItem={renderArticle}
                    keyExtractor={(item) => Math.random().toString()}
                />
            ) : (
                <Text style={{ color: "white" }}>Loading</Text>
            )}

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

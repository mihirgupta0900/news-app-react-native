import React, { useState, useEffect, useCallback } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    RefreshControl,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { renderArticle } from "../helpers/renderArticle";
import { wait } from "../helpers/refresh";
import { fetchArticlesByCountry } from "../helpers/fetchArticles";
import Loading from "../components/Loading";

const Top = ({ navigation }) => {
    // State Hooks
    const [articleData, setArticleData] = useState(undefined);
    const [refreshing, setRefreshing] = useState(false);

    // Function to fetch articles
    const fetchFn = () => {
        fetchArticlesByCountry("in").then((data) => {
            data.articles[0].first = true;
            setArticleData(data);
            console.log(`NATIONAL DATA ====> ${data}`);
        });
    };

    // Function to run after first render
    useEffect(() => {
        fetchFn();
    }, []);

    // Fn to run oulled to refresh
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchFn();

        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View style={styles.container}>
            {articleData ? (
                <FlatList
                    data={articleData.articles}
                    renderItem={renderArticle}
                    keyExtractor={(item) => Math.random().toString()}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
            ) : (
                <Loading />
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

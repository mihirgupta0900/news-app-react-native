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
import TopCard from "../components/TopCard";
import Card from "../components/Card";
import { testData } from "../constants";
import { renderArticle } from "../helpers/renderArticle";
import { wait } from "../helpers/refresh";
import getEnvVars from "../environment";
import { fetchArticlesByQuery } from "../helpers/fetchArticles";
import Navbar from "../components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import Loading from "../components/Loading";

const { newsApiKey } = getEnvVars();

const Politics = ({ navigation }) => {
    // State Hooks
    const [articleData, setArticleData] = useState(undefined);
    const [refreshing, setRefreshing] = useState(false);

    // Function to fetch articles
    const fetchFn = () => {
        fetchArticlesByQuery({ query: "politics" }).then((data) => {
            data.articles[0].first = true;
            setArticleData(data);
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
            <SafeAreaView>
                <Navbar screenName="Politics" />
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
            </SafeAreaView>
        </View>
    );
};

export default Politics;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        paddingHorizontal: 5,
        paddingTop: 4,
    },
});

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

const Science = ({ navigation }) => {
    // State Hooks
    const [articleData, setArticleData] = useState(undefined);
    const [refreshing, setRefreshing] = useState(false);
    const [page, setPage] = useState(1);

    // Function to fetch articles
    const fetchFn = () => {
        fetchArticlesByQuery({ query: "science", page: page }).then((data) => {
            if (page === 1) {
                data.articles[0].first = true;
                setArticleData(data.articles);
            } else {
                setArticleData([...articleData, ...data.articles]);
            }
        });
    };

    const fetchMoreFn = () => {
        // console.log(`EXTRA FN RUN`);
        setPage((curPage) => curPage + 1);
    };

    // Function to run after first render
    useEffect(() => {
        fetchFn();
    }, [page]);

    // Fn to run oulled to refresh
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchFn();

        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Navbar screenName="Science" />
                {articleData ? (
                    <FlatList
                        contentContainerStyle={{ paddingBottom: 100 }}
                        data={articleData}
                        renderItem={renderArticle}
                        keyExtractor={(item) => Math.random().toString()}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                        onEndReachedThreshold={0.1}
                        onEndReached={fetchMoreFn}
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

export default Science;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        paddingHorizontal: 5,
        paddingTop: 4,
    },
});

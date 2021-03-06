import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, FlatList, RefreshControl } from "react-native";
import { StatusBar } from "expo-status-bar";
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
<<<<<<< HEAD

    console.log(page);

    // Function to fetch articles
    const fetchFn = () => {
        console.log(`FETCH FN RUN`);
        fetchArticlesByQuery({ query: "science", page: page }).then((data) => {
            if (page === 1) {
                data.articles[0].first = true;
                setArticleData(data.articles);
            } else {
                data.articles.map((article) => console.log(article.title));
                setArticleData([...articleData, ...data.articles]);
=======
    const [moreLoading, setMoreLoading] = useState(false);

    // Function to fetch articles
    const fetchFn = () => {
        fetchArticlesByQuery({ query: "science", page: page }).then((data) => {
            // console.log(data);
            if (data.status === 'error') {
                console.log(`data not there`);
            } else {
                if (page === 1) {
                    console.log(data.articles.length);
                    data.articles[0].first = true;
                    setArticleData(data.articles);
                } else {
                    console.log(data.articles.length);
                    setArticleData([...articleData, ...data.articles]);
                }
>>>>>>> 7a428e4964ea902190f77794acc666196aab999e
            }
        });
    };

<<<<<<< HEAD
    const fetchMoreFn = () => {
        console.log(`EXTRA FN RUN`);
        setPage((curPage) => curPage + 1);
    };

    // Function to run after first render
=======
    // Fn to load more data
    const fetchMoreFn = () => {
        setPage((curPage) => curPage + 1);
    };
    // const fetchMoreFn = useCallback(() => {
    //     setMoreLoading(true);
    //     setPage(page => page + 1)

    //     wait(1000).then(() => setMoreLoading(false));
    // }, []);

    // Function to run after first render and when `page` changes
>>>>>>> 7a428e4964ea902190f77794acc666196aab999e
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
<<<<<<< HEAD
                        contentContainerStyle={{ paddingBottom: 100 }}
=======
                        contentContainerStyle={{ paddingBottom: 200 }}
>>>>>>> 7a428e4964ea902190f77794acc666196aab999e
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
<<<<<<< HEAD
=======
                {/* {moreLoading ? <Text>Loading</Text> : <View></View>} */}
>>>>>>> 7a428e4964ea902190f77794acc666196aab999e
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

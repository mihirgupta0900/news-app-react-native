import React, { useState, useCallback } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    RefreshControl,
    FlatList,
} from "react-native";
import SearchNavbar from "../components/SearchNavbar";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchSvg from "../components/SearchSvg";
import { fetchArticlesByQuery } from "../helpers/fetchArticles";
import { ScrollView } from "react-native-gesture-handler";
import { renderArticle } from "../helpers/renderArticle";
import { render } from "react-dom";
import { wait } from "../helpers/refresh";
import Loading from "../components/Loading";

const Search = ({ navigation }) => {
    const [text, setText] = useState("");
    const [articleData, setArticleData] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const onSearch = (query) => () => {
        setLoading(true);
        fetchArticlesByQuery({ query })
            .then((data) => {
                setArticleData(data);
                setLoading(false);
                setText("");
            })
            .catch((err) => {
                setLoading(false);
                setText("");
                console.log(err);
                throw err;
            });
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchFn();

        wait(2000).then(() => setRefreshing(false));
    }, []);

    const mainRender = () => {
        if (articleData) {
            return (
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
            );
        } else {
            return (
                <View style={styles.main}>
                    <SearchSvg height={500} opacity={0.8} />
                </View>
            );
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <SearchNavbar
                    setState={setText}
                    state={text}
                    onSubmitFn={onSearch(text)}
                />
                {loading ? (
                    <Loading />
                ) : (
                    mainRender()
                )}

                {/* <View style={styles.loading}>
                    <Image
                        source={require("../assets/infinity-loading-121212.gif")}
                        // height={50}
                        // width={50}
                        style={{
                            height: 300,
                            width: 300,
                        }}
                    />
                </View> */}
            </SafeAreaView>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        // alignItems: "center",
        // justifyContent: "center",
    },
    main: {
        justifyContent: "center",
        alignItems: "center",
        height: "90%",
        // borderWidth: 1,
        // borderColor: 'white',
        // height: 500,
        // padding: 5
    },
});

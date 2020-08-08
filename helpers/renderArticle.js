import React from "react";
import TopCard from "../components/TopCard";
import Card from "../components/Card";

export const renderArticle = ({ item }) => {
    if (item.first) {
        return (
            <TopCard
                title={item.title}
                publishedAt={item.publishedAt}
                imageUrl={item.urlToImage}
                url={item.url}
            />
        );
    } else {
        return (
            <Card
                title={item.title}
                publishedAt={item.publishedAt}
                imgSrc={item.urlToImage}
                url={item.url}
            />
        );
    }
};

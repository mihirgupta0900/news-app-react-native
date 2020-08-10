import getEnvVars from "../environment";
const { newsApiKey } = getEnvVars();

export const fetchArticlesByCountry = ({ country }) => {
    return fetch(`https://newsapi.org/v2/top-headlines?country=${country}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newsApiKey}`,
        },
    })
        .then((res) => res.json())
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

export const fetchArticlesByQuery = ({ query }) => {
    return fetch(`https://newsapi.org/v2/top-headlines?q=${query}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newsApiKey}`,
        },
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

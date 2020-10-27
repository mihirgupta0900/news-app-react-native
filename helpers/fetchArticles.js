import getEnvVars from "../environment";
import moment from "moment";
const { serverUrl } = getEnvVars();

var todaysDateISO = moment().toISOString();
var weekBackDateISO = moment().subtract(7, "d").toISOString();

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

export const fetchArticlesByQuery = ({ query, page }) => {
    return fetch(`${serverUrl}/getResByQuery?q=${query}&page=${page}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

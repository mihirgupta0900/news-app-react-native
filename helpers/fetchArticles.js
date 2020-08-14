import getEnvVars from "../environment";
import moment from "moment";
const { serverUrl } = getEnvVars();

var todaysDateISO = moment().toISOString();
var weekBackDateISO = moment().subtract(7, "d").toISOString();

export const fetchArticlesByCountry = (country) => {
    // console.log(`${serverUrl}/getResByCountry?country=${country}`);

    return fetch(
        `http://${serverUrl}:8000/api/getResByCountry?country=${country}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
        .then((res) => res.json())
        .catch((err) => {
            return console.log(`FETCH ERR ====> ${JSON.stringify(err)}`);
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

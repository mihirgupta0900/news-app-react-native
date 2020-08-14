import getEnvVars from "../environment";
const { serverUrl } = getEnvVars();

export const fetchArticlesByCountry = ({ country }) => {
    // http://192.168.1.14:8000/api/getResByCountry?country=us
    return fetch(`http://${serverUrl}/getResByCountry?country=${country}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .catch((err) => {
            return console.log(`FETCH ERR ====> ${JSON.stringify(err)}`);
        });
};

export const fetchArticlesByQuery = ({ query, page }) => {
    return fetch(`http://${serverUrl}/getResByQuery?q=${query}&page=${page}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

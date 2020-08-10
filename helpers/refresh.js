// import { useCallback } from "react";

export const wait = (timeout) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
};

// export const onRefresh = ({setState, fn, callBackfn}) => callBackfn(() => {
//     // setRefreshing(true);
//     setState(true)
//     // fetchArticlesByCountry({ country: "us" }).then((data) => {
//     //     data.articles[0].first = true;
//     //     setArticleData(data);
//     // });
//     fn()

//     wait(2000).then(() => setState(false));
// }, []);

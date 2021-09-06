import axios from "axios";

export const apiDadata = axios.create({
    baseURL: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + "8ecfdb051778d4f484e1d3a84626565877322ea2",
    },
    validateStatus(status) {
        return status >= 200 && status < 300;
    },
});

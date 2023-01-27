import axios from "axios";

const http = axios.create({
    baseURL: "https://www.meetbhure.tech/api",
    headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
        "Content-Type": "application/json",
    },
});

export { http };

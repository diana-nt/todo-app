import axios from "axios";
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});
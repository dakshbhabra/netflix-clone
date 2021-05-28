import axios from "axios";

// axios :- to fetch data 

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// instance.get('/foo-bar')

export default instance;
// you can export only one component as a default 
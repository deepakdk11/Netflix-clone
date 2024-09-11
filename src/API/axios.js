import axios from "axios";

const website = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default website
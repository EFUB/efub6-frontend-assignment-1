import axios from "axios";

const URL = "https://movies-api.accel.li/api/v2";

export const getMovies = async ()=>{
    const response = await axios.get(
        `${URL}/list_movies.json`
    );

    return response.data.data.movies;
}


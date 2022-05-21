const baseURL = "https://api.themoviedb.org/3";
const API_KEY = "27e01e4a6ce05029d214d370746cfd80";
//https://api.themoviedb.org/3/trending/all/week?api_key=27e01e4a6ce05029d214d370746cfd80
const requests = {
    fetchTrending:`${baseURL}/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals:`${baseURL}/trending/all/week?api_key=${API_KEY}`,
    fetchTopRated:`${baseURL}/trending/all/week?api_key=${API_KEY}&width_genres=en-US`,
    fetchActionMovies:`${baseURL}/trending/all/week?api_key=${API_KEY}&width_genres=28`,
    fetchComedyMovies:`${baseURL}/trending/all/week?api_key=${API_KEY}&width_genres=35`,
    fetchHorrorMovies:`${baseURL}/trending/all/week?api_key=${API_KEY}&width_genres=27`,
    fetchRomanceMovies:`${baseURL}/trending/all/week?api_key=${API_KEY}&width_genres=10749`,
    fetchDocumentaries:`${baseURL}/trending/all/week?api_key=${API_KEY}&width_genres=99`,
};

export default requests;

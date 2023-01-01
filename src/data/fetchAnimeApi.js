import axios from "axios";

const animeUrl = "https://gogoanime2.p.rapidapi.com";
const hostUrl = "gogoanime2.p.rapidapi.com";

const options = {
  url: animeUrl,
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": hostUrl,
  },
};

export const fetchRecentRelease = async (type = 1, page = 1) => {
  try {
    const { data } = await axios.get(`${animeUrl}/recent-release?type=${type}&page=${page}`, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Currently, top airing animes are not available
export const fetchTopAiring = async () => {
    const { data } = await axios.get(`${animeUrl}/top-airing`, options);
    return data;
};

export const fetchPopular = async (page = 1) => {
  try {
    const { data } = await axios.get(
      `${animeUrl}/popular?page=${page}`,
      options
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAnimeDetails = async (animeId) => {
  try {
    const { data } = await axios.get(
      `${animeUrl}/anime-details/${animeId}`,
      options
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchStreamingUrls = async (url) => {
  try {
    const { data } = await axios.get(`${animeUrl}/${url}`, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGenre = async (genre, page = 1) => {
  try {
    const { data } = await axios.get(`${animeUrl}/genre/${genre}?page=${page}`, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovies = async (page) => {
  try {
    const { data } = await axios.get(`${animeUrl}/anime-movies?page=${page}`,options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchTerm = async (searchTerm) => {
  try {
    const { data } = await axios.get(`${animeUrl}/search${searchTerm}`,options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

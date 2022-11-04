import axios from "axios"

const animeUrl = 'https://gogoanime2.p.rapidapi.com'
const hostUrl = 'gogoanime2.p.rapidapi.com'

const options = {
    url: animeUrl,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': hostUrl
    }
}

export const fetchRecentRelease = async ()=>{
    const { data } = await axios.get(`${animeUrl}/recent-release`, options)
    return data;
  }

export const fetchTopAiring = async ()=>{
    const { data } = await axios.get(`${animeUrl}/top-airing`, options)
    return data;
  }

export const fetchPopular = async ()=>{
    const { data } = await axios.get(`${animeUrl}/popular`, options)
    return data;
  }

export const fetchAnimeDetails = async (animeId)=>{
    const { data } = await axios.get(`${animeUrl}/anime-details/${animeId}`, options)
    return data;
  }

export const fetchStreamingUrls = async (url)=>{
    const { data } = await axios.get(`${animeUrl}/${url}`, options)
    return data;
}
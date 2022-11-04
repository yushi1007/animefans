import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import AnimePlayerCard from '../AnimePlayerCard';
import { fetchStreamingUrls } from '../../data/fetchAnimeApi'

const AnimeVideo = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null)

    useEffect(() => {
        fetchStreamingUrls(`vidcdn/watch/${id}`)
        .then((data)=>setVideo(data.sources));
      }, [id])

  return (
    <div className="container">
        <AnimePlayerCard video={video}/>
    </div>
  )
}

export default AnimeVideo
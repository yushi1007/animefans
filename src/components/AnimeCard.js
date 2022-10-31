import React from 'react'

const AnimeCard = ({ animeList }) => {
    console.log(animeList.animeImg)
  return (
    <div className="anime-card">
        <a>
            <figure className="card-banner">
                <img src={animeList.animeImg} alt={animeList.animeTitle} />
            </figure>
        </a>
        <div className="title-wrapper">
            <a>
                <h3 className="card-title">{animeList.animeTitle}</h3>
            </a>
            <span className="episode">{animeList.episodeNum}</span>
        </div>
        <div className="card-meta">
            <div className="sub">
                <span>{animeList.subOrDub}</span>
            </div>
        </div>
    </div>
  )
}

export default AnimeCard
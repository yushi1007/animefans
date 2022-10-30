import React from 'react'
import { Link } from 'react-router-dom'
import { genres } from '../data/data'

const Genres = () => {
  return (
    <div className="genres-list">
        <h1>Genres</h1>
        <div className="genres-row">
            {genres.map((genre, index) => {
                console.log(genre)
                return(
                <div key={index} className="genres-text">
                    <a href="#">
                        <span>{genre}</span>
                    </a>
                </div>
                )
})}
        </div>
    </div>
  )
}

export default Genres
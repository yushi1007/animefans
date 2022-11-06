import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { genres } from '../data/data'

const Genres = () => {
  return (
    <div className="genres-list">
        <h1>Genres</h1>
        <div className="genres-row">
            {genres.map((genre, index) => {
                return(
                <div key={index} className="genres-text">
                    <NavLink to={`/genre/${genre}`}>
                        {genre}
                    </NavLink>
                </div>
                )
})}
        </div>
    </div>
  )
}

export default Genres
import React, { useState, useEffect } from 'react'
import HomeCard from './HomeCard'
import { fetchAnimeDetails } from '../data/fetchAnimeApi'

const Home = ({ topAiring }) => {
  const [homeData, setHomeData] = useState([])

  return (
    <>
      <div id="main-slider">
        {topAiring.slice(0, 1).map((topAiringItem, index)=> {
          return(
            <HomeCard key={index} topAiringItem={topAiringItem} />
          )
        })}
      </div>
    </>
  )
}

export default Home
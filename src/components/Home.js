import React from 'react'
import HomeCard from './HomeCard'

const Home = ({ topAiring }) => {
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
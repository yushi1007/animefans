import React, { useState, useEffect } from 'react'
import HomeCard from './HomeCard'
import { fetchAnimeDetails } from '../data/fetchAnimeApi'

const Home = ({ topAiring }) => {
  const [homeData, setHomeData] = useState([])
  // const ta = topAiring.slice(0, 6);
  // useEffect(() => {
  //    const fetchData = async () => {
  //     await ta.forEach((item) => {
  //      fetchAnimeDetails(`${item.animeId}`)
  //        .then((data) => data)
  //        .then((data) => {
  //          if(homeData.length < 5){
  //           console.log(homeData)
  //           setHomeData(oldArray => [...oldArray, data])
  //         } else {
  //           return
  //         }
  //         });
  //       });
  //     }
  //     fetchData();
  // }, [ta])

  return (
    <>
      <div className="homeContainer">
        {topAiring.slice(0, 5).map((topAiringItem, index)=> {
          return(
            <HomeCard key={index} topAiringItem={topAiringItem} />
          )
        })}
      </div>
    </>
  )
}

export default Home
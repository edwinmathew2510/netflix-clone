import React, { useEffect, useState} from 'react'
import "./Banner.css";
import { API_KEY, imageUrl } from '../../constants/constant';
import axios from '../../constants/axios'




function Banner() {
const [movie, setMovie]=useState()

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
    setMovie(response.data.results[randomIndex])}
  )},[]);
  return (
    <div
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:"bannerImage"})`}}
     className='banner'>
        <div className=' content'>
            <h1 className='title'>{movie?movie.title:"movie"}</h1>
            <div className='Banner-btns'>
                <button>Play</button>
                <button>My list</button>
            </div>
            <h1 className='description'>{movie?movie.overview:"movie"}</h1>
        </div>
        <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner

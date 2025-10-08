import React, { useEffect, useState } from 'react'
import './RowPost.css'
// import axios from 'axios'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constant'
import YouTube from 'react-youtube'



function Rowpost(props) {
  const [movies,setMovies]=useState([])

  const [urlId,setUrlId]=useState('')

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      // console.log(response.data); 
        setMovies(response.data.results)
    }).catch((error)=>
    alert(error+"NETWORK ERROR"))

  });
  const handleMovieClick=(id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("Array Empty")
      }
  }
)
  }
   const opts = {
      height: '450',
      width: "1300",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
  return (
    <div className='rowpost'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((movie, index) => (
  <img
    key={index}
    onClick={() => handleMovieClick(movie.id)}
    className={props.isSmall ? "small-poster" : "poster"}
    src={`${movie ? imageUrl + movie.backdrop_path : "movie"}`}
    alt="card"
  />
))}
        </div>
        {urlId&&<YouTube  videoId={urlId.key} opts={opts} />}
    </div>
  )
}


export default Rowpost;

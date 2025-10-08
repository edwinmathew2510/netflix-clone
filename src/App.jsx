import React from 'react'
import './App.css'
import NavBar from './componets/NavBar/NavBar'
import Banner from './componets/Banner/Banner'
import Rowpost from './componets/RowPost/RowPost'
import { action, comedyMovies, Documentaries, HorrorMovies, originals, RomanceMovies, trending } from './constants/url'




function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title ="Netflix Originals"/>
      <Rowpost url={trending} title="Trending" isSmall={true}/>
      <Rowpost url={action} title="Action" isSmall={true}/>
      <Rowpost url={comedyMovies} title="Comedy" isSmall={true}/>
      <Rowpost url={HorrorMovies} title="Horror" isSmall={true}/>
      <Rowpost url={RomanceMovies} title="Romance" isSmall={true}/>
      <Rowpost url={Documentaries} title="Documentaries" isSmall={true}/>
    </div>
  )
}

export default App

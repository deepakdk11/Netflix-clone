import React from 'react'
import NavBar from '../Components/NavBar'
import Banner from '../Components/Banner'
import Row from '../Components/Row'
import request from '../API/request'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Row 
        title={"Netflix Originals"}
        fetchUrl={request.fetchNetflixOriginals}
        isLarge
      />
      <Row 
        title={"Trending Now"}
        fetchUrl={request.fetchNetflixTrending}
      />
      <Row 
        title={"Top Rated"}
        fetchUrl={request.fetchNetflixTopRated}
      />
      <Row 
        title={"Romance Movies"}
        fetchUrl={request.fetchNetflixRomanceMovies}
      />
      <Row 
        title={"Documents Movies"}
        fetchUrl={request.fetchNetflixDocumentaries}
      />
      <Row 
        title={"Comedy Movies"}
        fetchUrl={request.fetchNetflixComedyMovies}
      />
      <Row 
        title={"Horror Movies"}
        fetchUrl={request.fetchNetflixHorrorMovies}
      />
      <Row 
        title={"Action Movies"}
        fetchUrl={request.fetchNetflixActionMovies}
      />
      <Footer />
    </div>
  )
}

export default Home

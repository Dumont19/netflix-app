/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react'

import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'

import './App.css'

export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {

      let list = await Tmdb.getHomeList()
      setMovieList(list);

      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }
    
    loadAll()
  }, [])

  useEffect(() => {
    const scroolListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scroolListener)
    return () => {
      window.removeEventListener('scroll', scroolListener)
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <p>Coded by <a href='https://github.com/Dumont19' target='_blank' rel='noreferrer'>Matheus Dumont</a></p> 
        <p>All images rights to <a href="https://www.netflix.com/br/" target='_blank' rel='noreferrer'>Netflix</a></p>
        <p>All data from <a href="https://www.themoviedb.org/?language=pt-BR" target='_blank' rel='noreferrer'>Themoviedb.org</a></p>
      </footer>
      
      {movieList.length <= 0 &&
        <div className="loading">
            <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
        </div>
      }
    </div>
  )
}
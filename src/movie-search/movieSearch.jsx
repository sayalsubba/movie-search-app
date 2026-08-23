import React, { useEffect, useState } from 'react'
import Css from "./movieSearch.module.css"
export default function movieSearch() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [storeMovie, setStoreMovie] = useState([]);
  const [dark, setDark] = useState(false);
  const key = "3dd035b5";
  const clickMovie = () => {
    setMovies(search)
  }
  console.log(dark)
  const handleDark = () => {
  setDark(prev => !prev)
  }

  useEffect(() => {
    if (movies === "") {
      alert("please enter something");

    } else {
      async function fetchMovie() {
        const newMovies = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${movies}`);
        const response = await newMovies.json();
        setStoreMovie(response.Search || []);
        console.log(response)
      }
      fetchMovie();
    }
  }, [movies]);

  return (
    <>
      <div className={dark? Css.dark : Css.light}>
        <div className={Css["mainPrt"]}>
          <input type="text" placeholder='Enter Movie...' value={search} onChange={(e) => {
            setSearch(e.target.value)
          }} />
          <button onClick={() => {
            clickMovie()
          }}>Search</button>
          <div className={Css["displayContent"]}>
            {storeMovie.map((item) => (
              <div className={Css['design']} key={item.imdbID}>
                   <img src={item.Poster} alt="" />
                <h1>{item.Title}</h1>
                <p>{item.Year}</p>
             
              </div>
            ))}
          </div>
          <button onClick={() => {
            handleDark()
          }}> DarkMode</button>

        </div>

      </div>
    </>
  )
}

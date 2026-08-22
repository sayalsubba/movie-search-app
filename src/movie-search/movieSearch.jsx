import React, { useState } from 'react'
import Css from "./movieSearch.module.css"
export default function movieSearch() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState("");

  const clickMovie = () => {
    setSearch("");
setMovies(search);
  }


  return (
    <>
      <div className={Css["main"]}>
        <div className={Css["mainPrt"]}>
          <input type="text" placeholder='Enter Movie...' value={search} onChange={(e) => {
            setSearch(e.target.value)
          }} />
          <button onClick={() => {
            clickMovie()
          }}>Search</button>
          <h1>{search}</h1>
          <h2>{movies}</h2>
        </div>

      </div>
    </>
  )
}

import React, { useState } from 'react'
import Css from "./movieSearch.module.css"
export default function movieSearch() {
  const [search, setSearch] =useState("");
  return (
<>
<div className={Css["main"]}>
<div className={Css["mainPrt"]}>

<input type="text" />
<button>Search</button>
</div>

</div>
</>
  )
}

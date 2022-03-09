import React, { useContext } from 'react'
import { GlobalContext } from '../../components/context/GlobalState'
import SingleContent from '../../components/SingleContent/SingleContent';

function Watchlist () {
  const {watchlist} = useContext(GlobalContext);
  return (
    <div>
        <span className="pageTitle">Watch List</span>
        {watchlist && watchlist.map((c) => <SingleContent 
        key={c.id}
        id={c.id}
        poster={c.poster}
        title={c.title || c.name}
        date={c.date}
        media_type="movie"
        vote_average={c.vote_average}
         /> )}
    </div>
  )
}

export default Watchlist
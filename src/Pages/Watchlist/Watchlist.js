import React, { useContext } from 'react'
import { GlobalContext } from '../../components/context/GlobalState'
import SingleContent from '../../components/SingleContent/SingleContent';

function Watchlist () {
  const {watchlist} = useContext(GlobalContext);
  return (
    <div>
      {watchlist.length > 0 ? (
      <div>
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
      ) : (<h2>No movies in your list, add some!</h2>)
        }
    </div>
  )
      }

export default Watchlist;
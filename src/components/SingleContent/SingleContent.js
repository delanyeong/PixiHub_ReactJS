import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { img_300, unavailable } from '../../config/config'
import './SingleContent.css'
import ContentModal from "../ContentModal/ContentModal"
import { Button } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function SingleContent (props) {
  const { addMovieToWatchlist, watchlist, watched, removeMovieFromWatchlist, addMovieToWatched, removeFromWatched } = useContext(GlobalContext)

  let storedMovie = watchlist.find((o) => o.id === props.id );

  let storedMovieWatched = watched.find((o) => o.id === props.id );

  // const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;

  // const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <ContentModal media_type={props.media_type} id={props.id}>
      <img className="poster" 
      src={ `${props.poster}` ?`${img_300}/${props.poster}` : `${unavailable}` }  alt={props.title} />
      <b className="title">{props.title}</b>
      <span className="subTitle">
        {`${props.media_type}` === "tv" ? "TV Series" : "Movie"}
      <span className="subTitle">{props.date}</span>
      </span>

      {storedMovie ? (
        <Button 
          onClick={() => removeMovieFromWatchlist(props.id)}
          variant="contained" 
          color="primary" 
          className={mergeClasses.button} 
          startIcon={<DeleteIcon />}>Favourites
        </Button>
      ) : (storedMovieWatched) ? (
        <Button 
          onClick={() => removeMovieFromWatchlist(props.id)}
          variant="contained" 
          color="primary" 
          className={mergeClasses.button} 
          startIcon={<DeleteIcon />}>Favourites
        </Button>
        ) : (
        <Button 
          // disabled={watchlistDisabled}
          onClick={() => addMovieToWatchlist(props)}
          variant="contained" 
          color="primary" 
          className={mergeClasses.button} 
          startIcon={<AddIcon />}>Favourites
        </Button>
        )
      }

      {storedMovieWatched ? (
        <Button 
          onClick={() => removeFromWatched(props.id)}
          variant="contained" 
          color="primary" 
          className={mergeClasses.button} 
          startIcon={<VisibilityOffIcon />}>
        </Button>
      ) : (
        <Button 
          // disabled={watchedDisabled}
          onClick={() => addMovieToWatched(props)}
          variant="contained" 
          color="primary" 
          className={mergeClasses.button} 
          startIcon={<VisibilityIcon />}>
        </Button>
      )
      }




















      {/* <Button 
      disabled={watchlistDisabled}
      onClick={() => addMovieToWatchlist(props)}
      variant="contained" 
      color="primary" 
      className={mergeClasses.button} 
      startIcon={<AddIcon />}>Favourites
      </Button>
      <Button 
      onClick={() => removeMovieFromWatchlist(props.id)}
      variant="contained" 
      color="primary" 
      className={mergeClasses.button} 
      startIcon={<DeleteIcon />}>Favourites
      </Button>
      <Button 
      disabled={watchedDisabled}
      onClick={() => addMovieToWatched(props)}
      variant="contained" 
      color="primary" 
      className={mergeClasses.button} 
      startIcon={<VisibilityIcon />}>
      </Button>
      <Button 
      onClick={() => removeFromWatched(props.id)}
      variant="contained" 
      color="primary" 
      className={mergeClasses.button} 
      startIcon={<VisibilityOffIcon />}>
      </Button> */}
    </ContentModal>
  )
}

export default SingleContent
import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { img_300, unavailable } from '../../config/config'
import './SingleContent.css'
import ContentModal from "../ContentModal/ContentModal"
import { Button } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import { mergeClasses } from '@material-ui/styles'

function SingleContent (props) {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext)

  let storedMovie = watchlist.find(o => o.id === props.id );

  const watchlistDisabled = storedMovie ? true : false;

  return (
    <ContentModal media_type={props.media_type} id={props.id}>
      <img className="poster" 
      src={ `${props.poster}` ?`${img_300}/${props.poster}` : `${unavailable}` }  alt={props.title} />
      <b className="title">{props.title}</b>
      <span className="subTitle">
        {`${props.media_type}` === "tv" ? "TV Series" : "Movie"}
      <span className="subTitle">{props.date}</span>
      </span>
      <Button 
      disabled={watchlistDisabled}
      onClick={() => addMovieToWatchlist(props)}
      variant="contained" 
      color="primary" 
      className={mergeClasses.button} 
      startIcon={<VisibilityIcon />}>Add to Favourites
      </Button>
    </ContentModal>
  )
}

export default SingleContent
import React from 'react'
import { img_300, unavailable } from '../../config/config'
import './SingleContent.css'
import ContentModal from "../ContentModal/ContentModal"

function SingleContent (props) {
  return (
    <ContentModal media_type={props.media_type} id={props.id}>
      <img className="poster" 
      src={ `${props.poster}` ?`${img_300}/${props.poster}` : `${unavailable}` }  alt={props.title} />
      <b className="title">{props.title}</b>
      <span className="subTitle">
        {`${props.media_type}` === "tv" ? "TV Series" : "Movie"}
      <span className="subTitle">{props.date}</span>
      </span>
    </ContentModal>
  )
}

export default SingleContent
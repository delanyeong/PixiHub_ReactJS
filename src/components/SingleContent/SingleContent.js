import React from 'react'
import { img_300 } from '../../config/config'

function SingleContent (props) {
  return (
    <div>
        <img src={`${img_300}/${props.poster}`}></img>
    </div>
  )
}

export default SingleContent
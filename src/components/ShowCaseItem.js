import React from 'react'

import './ShowCaseItem.css'

const ShowCaseItem = (props) => {
  return (
    <div className={props.style}>
      {/* {props.title} */}
      <img
        className='showcase-item-image'
        src={props.image}
        alt={props.image}
      />
      {/* {props.description} */}
    </div>
  )
}

export default ShowCaseItem

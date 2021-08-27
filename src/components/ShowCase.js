import React from 'react'

import './ShowCase.css'

import ShowCaseItem from '../components/ShowCaseItem'

const ShowCase = (props) => {
  return (
    <div className='showcase'>
      <div className='showcase-title'>
        {props.title ? props.title : 'Showcase Title'}
      </div>
      <div className='showcase-content'>
        {props.items.map((item, index) => {
          return (
            <ShowCaseItem
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ShowCase

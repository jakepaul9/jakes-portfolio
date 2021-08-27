import React from 'react'

import ShowCaseItem from '../components/ShowCaseItem'

import './Graphics.css'

const Graphics = (props) => {
  console.log(props.content)
  return (
    <div className='graphics-container'>
      <div className='header'></div>
      <div className='content'>
        <div className='page-title'>design</div>
        <div className='page-description'>
          I consider myself a visionary with strong problem solving skills that
          I've developed over the years in both my personal and professional
          life. My mind is alway busy thinking of new ideas, sometimes
          annoyingly so, whether it's a new app, a tangeable product, or even
          new business opportunities or solutions. In an effort to help breath
          life into these ideas I sit down with my photo editor, or 3D rendering
          software and go to work, often starting with a sketch on the back of
          an envelope I've scanned to my computer. I don't have any formal
          education or training on graphic design, but I continually work
          towards improving my ability. Here is a collection of some of the
          logos, flyers, etc. I've designed.
        </div>
        {props.showCases[0].items.map((item, index) => {
          return (
            <ShowCaseItem
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
              style={item.style}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Graphics

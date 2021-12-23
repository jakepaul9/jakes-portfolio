import React from 'react'

import './Page.css'
import './Code.css'
import Project from '../components/Project.js'
import Projects from '../Projects.js'

// import cm from '../assets/images/CM.png'

const Code = () => {
  return (
    <div className='container-dark'>
      <div className='header-dark'></div>
      <div className='content-dark'>
        <div className='page-title-dark'>code</div>

        <div className='page-description-dark code'>
          The endless potential to solve problems with a programming language is
          very exciting to me. I enjoy thinking of ways to improve processes at
          work, or make things easier in my personal life by developing an app
          or writing a snippet of code. I enjoy using modern Javascript
          frameworks including those in the MERN stack, and also good ol' C++.
          I've included a couple projects below I've been/am working on either
          for school, or those I'm developing on the side. Feel free to visit my{' '}
          <a
            href='https://github.com/jakepaul9'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>{' '}
          page to browse through other projects I've been working on.
          {Projects.map((item, index) => {
            return (
              <Project key={index} title={item.title} image={item.image}>
                <div dangerouslySetInnerHTML={{ __html: item.description }} />
              </Project>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Code

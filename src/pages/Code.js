import React from 'react'

import './Page.css'
import './Code.css'
import Project from '../components/Project.js'

import cm from '../assets/images/CM.png'

const Code = () => {
  return (
    <div className='container-dark'>
      <div className='header-dark'></div>
      <div className='content-dark'>
        <div className='page-title-dark'>code</div>

        <div className='page-description-dark'>
          The endless potential to solve problems with a programming language is
          very exciting to me. I enjoy thinking of ways to improve processes at
          work, or make things easier in my personal life by developing an app
          or writing a snippet of code. I enjoy using modern Javascript
          frameworks including those in the MERN stack, and also good ol' C++.
          I've included projects below I've been/am working on either for
          school, or those I'm developing on the side.
          <Project title='ClutterMine' image={cm}>
            <span className='emph'>ClutterMine</span> is a mass garage sale
            business idea where people who want to get rid of, and maybe make a
            little money from items taking up room in their homes, but who lack
            the time/energy to go about posting ads, or even the means to take
            their "junk" to the dump can put there items on consigment with{' '}
            <span className='emph'>ClutterMine</span> who will do the rest.
            <br />
            <br />
            <span className='emph'>ClutterMine</span> will take the "clutter" to
            thier storefront where these items will sit for sale. As soon as the
            items are sold, the customer will recieve the consigment percentage
            that was agreed upon during the onboarding process.
          </Project>
        </div>
      </div>
    </div>
  )
}

export default Code

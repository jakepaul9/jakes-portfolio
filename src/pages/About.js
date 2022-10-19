import React from 'react'

import me from '../assets/images/me.jpg'
import spartan from '../assets/images/spartan.jpg'
import './Page.css'
import './About.css'

const About = () => {
  return (
    <div className='container-dark'>
      <div className='header-dark'></div>
      <div className='content-dark'>
        <div className='page-title-dark'>welcome</div>

        <div className='page-description-dark'>
          My name is <span className='emph'>Jake Grether</span>, a child of the
          90's born and raised in an old gold-mining town in southern Oregon
          called Gold Hill. After graduating{' '}
          <img className='me-img' src={me} alt='me' />
          highschool in 2009 I left my hometown to serve a two year mission in
          Orlando Florida for my church. I returned home, moved to Utah and 6
          months later <span className='emph'> married</span> my girlfriend of
          over two years. She runs an interior design company called{' '}
          <a href='https://design.mistidae.com'>Design by Misti Dae</a>
          <br />
          <br />I started my college education at SLCC, then later transfered to
          <span className='emph'> UVU</span> where I graduated in December 2020
          with my bachelors degree in
          <span className='emph'> Computer Science</span>. I emphasized in{' '}
          <span className='emph'>full-stack</span> web development and have come
          to really enjoy creating projects using the{' '}
          <span className='emph'>MERN</span> stack. I also grew an appreciation
          and learned to enjoy coding in <span className='emph'>C++</span>.{' '}
          <br /> <br />
          <img className='me-img-left' src={spartan} alt='spartan' />
          My true passion is music writing and recording. I also enjoy working
          on full-stack projects on the side including{' '}
          <span className='emph'> e-commerce</span> development, and am
          currently teaching myself <span className='emph'>React Native</span>{' '}
          and <span className='emph'> electronics/robotics </span>
          with my <span className='emph'>Raspberry Pi</span>. My wife and I
          enjoy doing outdoor activities together including hiking, and the
          occasional Spartan Race.
          <br />
          <br />
          I've included some pages here showcasing things about me you may be
          interested in, especially if you're considering me as a new member of
          your team. Enjoy!
        </div>
      </div>
    </div>
  )
}

export default About

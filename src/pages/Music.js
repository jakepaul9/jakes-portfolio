import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

import './Music.css'
import './Page.css'

import onStage from '../assets/images/onStage.png'

import Songs from '../Songs.js'

const Music = (props) => {
  return (
    <div className='container-dark'>
      <div className='header-dark'></div>
      <div className='content-dark'>
        <div className='page-title-dark'>music</div>
        <div className='page-description-dark'>
          I've always loved music, but it wasn't until middle school that I
          really got into "instrument-ing". I started out with the trumpet in my
          school band, then the drums, then the guitar which is when I started
          song writing. I've dabbled here and there with other instruments like
          piano and bass to satisfy the demands of the songs I've written.{' '}
          <br />
          <br />
          <img className='stage-left' src={onStage} alt='on stage' />I find
          musical inspiration through artists like Hank Williams Sr, Benjamin
          Todd, Pete Bernhard, Towns Van Zandt, Johnny Cash, Brian May, Maynard
          Keenan, Rivers Cuomo, Trent Reznor, and the Gallagher bothers to name
          a few.
          <br />
          <br />I mostly write songs about my life and things I've experienced.
          Although I plan to one day have all my songs recorded professionally,
          I have a small music recording setup at home. Here are some rough home
          recordings of a few originals.
          <div className='songs'>
            {Songs.map((item, index) => {
              return (
                <div className='song' key={index}>
                  <div className='song-title'>
                    <span className='white-text'>{index + 1}.</span>{' '}
                    {item.title}
                  </div>
                  <ReactAudioPlayer
                    className='player'
                    src={item.song}
                    autoPlay={false}
                    controls
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Music

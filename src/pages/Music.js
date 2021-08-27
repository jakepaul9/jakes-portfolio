import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

import './Music.css'

import song1 from '../assets/songs/A Lifetime With You.m4a'
import song2 from '../assets/songs/Clean Slate.m4a'
import song3 from '../assets/songs/Sleep Deprivation.m4a'
import song4 from '../assets/songs/Auto Pilot.m4a'
import song5 from '../assets/songs/Rain Dance.m4a'
import song6 from '../assets/songs/Damage control.m4a'
import song7 from '../assets/songs/A Moment Of Silence.m4a'
import song8 from '../assets/songs/Never let it die.m4a'
import song9 from '../assets/songs/Wordsmith.m4a'
import song10 from '../assets/songs/Dark clouds overhead.m4a'
import song11 from '../assets/songs/Simple Song.mp4'

const Music = () => {
  return (
    <div className='container-dark'>
      <div className='header-dark'></div>
      <div className='content-dark'>
        <div className='page-title-dark'>home recordings</div>
        <div className='page-description-dark'>
          I've always loved music, but it wasn't until middle school that I
          really got into "instrument-ing". I started out with the trumpet in my
          school band, then the drums, then the guitar which is when I started
          song writing. I've dabbled here and there with other instruments like
          piano and bass to satisfy the demands of the songs I've written. I
          find musical inspiration through artists like Hank Williams Sr,
          Benjamin Todd, Pete Bernhard, Towns Van Zandt, Johnny Cash, Brian May,
          Maynard Keenan, Rivers Quomo, Trent Resnor, and the Gallagher bothers
          to name a few. I mostly write songs about my life and things I've
          experienced. Although I plan to one da have all my songs recorded
          professionally, I have a small music recording setup at home. Here are
          some rough home recordings of a few originals.
          <div className='songs'>
            <div className='song'>
              <div className='song-title'> a lifetime with you</div>
              <ReactAudioPlayer src={song1} autoPlay={false} controls />
            </div>
            <div className='song'>
              <div className='song-title'> clean slate</div>
              <ReactAudioPlayer src={song2} autoPlay={false} controls />
            </div>
            <div className='song'>
              <div className='song-title'> sleep deprivation</div>
              <ReactAudioPlayer src={song3} autoPlay={false} controls />
            </div>
            <div className='song'>
              <div className='song-title'> auto pilot</div>
              <ReactAudioPlayer src={song4} autoPlay={false} controls />
            </div>
            <div className='song'>
              <div className='song-title'> rain dance</div>
              <ReactAudioPlayer src={song5} autoPlay={false} controls />
            </div>
            <div className='song'>
              <div className='song-title'> damage control</div>
              <ReactAudioPlayer src={song6} autoPlay={false} controls />
            </div>
            <div className='song'>
              <div className='song-title'>a moment of silence</div>
              <ReactAudioPlayer src={song7} autoPlay={false} controls />
            </div>
            <div className='song'>
              <div className='song-title'> never let it die</div>
              <ReactAudioPlayer src={song8} autoPlay={false} controls />
            </div>
            <div className='song'>
              <div className='song-title'> wordsmith</div>
              <ReactAudioPlayer src={song9} autoPlay={false} controls />
            </div>
            <div className='song'>
              <div className='song-title'> dark clouds</div>
              <ReactAudioPlayer src={song10} autoPlay={false} controls />
            </div>
            <div className='song'>
              <div className='song-title'> simple song</div>
              <ReactAudioPlayer src={song11} autoPlay={false} controls />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Music

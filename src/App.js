import './App.css'
import { HashRouter, NavLink, Route } from 'react-router-dom'

import Graphics from './pages/Graphics'
import Home from './pages/Home'
import Music from './pages/Music'
import Code from './pages/Code'
import About from './pages/About'

// import { BiPaint } from 'react-icons/bi'
// import { RiBracesFill, RiHomeLine } from 'react-icons/ri'
// import { BsMusicNoteBeamed } from 'react-icons/bs'
// import { FaRegLightbulb } from 'react-icons/fa'

import { Showcases } from './Showcases'
import { RiBracesFill, RiHomeLine } from 'react-icons/ri'
import { BiPaint } from 'react-icons/bi'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa'

const App = () => {
  return (
    <div className='App'>
      <HashRouter>
        <div className='nav-bar'>
          <div className='nav-links'>
            <NavLink
              className='home-link'
              to='/'
              exact
              // activeClassName='pt-clicked-link'
              // style={{ textDecoration: 'none' }}
            >
              <RiHomeLine />
            </NavLink>
            <NavLink
              to='/about'
              // activeClassName='pt-clicked-link'
              // style={{ textDecoration: 'none' }}
            >
              {/* <FaRegLightbulb /> */}me
            </NavLink>
            <NavLink
              to='/code'

              // activeClassName='pt-clicked-link'
              // style={{ textDecoration: 'none' }}
            >
              {/* <RiBracesFill /> */}code
            </NavLink>
            <NavLink
              to='/design'

              // activeClassName='pt-clicked-link'
              // style={{ textDecoration: 'none' }}
            >
              {/* <BiPaint /> */}design
            </NavLink>
            <NavLink
              to='/music'

              // activeClassName='pt-clicked-link'
              // style={{ textDecoration: 'none' }}
            >
              {/* <BsMusicNoteBeamed /> */}music
            </NavLink>
          </div>
          <Route
            path='/'
            exact
            render={(props) => <Home {...props} showCases={Showcases} />}
          />
          <Route
            path='/design'
            render={(props) => <Graphics {...props} showCases={Showcases} />}
          />
          <Route
            path='/code'
            render={(props) => <Code {...props} showCases={Showcases} />}
          />
          <Route
            path='/about'
            render={(props) => <About {...props} showCases={Showcases} />}
          />
          <Route
            path='/music'
            render={(props) => <Music {...props} showCases={Showcases} />}
          />
        </div>
      </HashRouter>
    </div>
  )
}

export default App

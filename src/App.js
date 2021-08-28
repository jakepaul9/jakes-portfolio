import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { HashRouter, NavLink, Route } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import Graphics from './pages/Graphics'
import Home from './pages/Home'
import Music from './pages/Music'
import Code from './pages/Code'
import About from './pages/About'

import { Showcases } from './Showcases'
import { RiHomeLine } from 'react-icons/ri'

const App = () => {
  return (
    <div className='App'>
      <HashRouter>
        <Navbar
          collapseOnSelect={true}
          expand='lg'
          variant='dark'
          className='main-nav ml-auto jake'
        >
          <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto nav-links'>
                <Nav.Link
                  as={NavLink}
                  eventKey='0'
                  className='home-link'
                  to='/'
                  exact
                  // activeClassName='pt-clicked-link'
                  // style={{ textDecoration: 'none' }}
                >
                  <RiHomeLine />
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  eventKey='1'
                  to='/about'
                  // activeClassName='pt-clicked-link'
                  // style={{ textDecoration: 'none' }}
                >
                  me
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  eventKey='2'
                  to='/code'

                  // activeClassName='pt-clicked-link'
                  // style={{ textDecoration: 'none' }}
                >
                  code
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  eventKey={3}
                  to='/design'

                  // activeClassName='pt-clicked-link'
                  // style={{ textDecoration: 'none' }}
                >
                  design
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  eventKey='4'
                  to='/music'

                  // activeClassName='pt-clicked-link'
                  // style={{ textDecoration: 'none' }}
                >
                  music
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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
      </HashRouter>

      {/* <HashRouter>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Nav className='me-auto'>
              <Nav.Link
              eventKey="2"
                className='home-link'
                to='/'
                exact
                // activeClassName='pt-clicked-link'
                // style={{ textDecoration: 'none' }}
              >
                <RiHomeLine />
              </Nav.Link>
              <Nav.Link
                to='/about'
                // activeClassName='pt-clicked-link'
                // style={{ textDecoration: 'none' }}
              >
                me
              </Nav.Link>
              <Nav.Link
                to='/code'

                // activeClassName='pt-clicked-link'
                // style={{ textDecoration: 'none' }}
              >
                code
              </Nav.Link>
              <Nav.Link
                to='/design'

                // activeClassName='pt-clicked-link'
                // style={{ textDecoration: 'none' }}
              >
                design
              </Nav.Link>
              <Nav.Link
                to='/music'

                // activeClassName='pt-clicked-link'
                // style={{ textDecoration: 'none' }}
              >
                music
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className='nav-bar'>
        
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
      </HashRouter>*/}
    </div>
  )
}

export default App

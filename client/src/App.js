import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/routes';
import { Link } from 'react-router-dom'
// React-MDL components
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl'
// Styling
import './assets/css/App.css';
import homeBG from './assets/images/home-bg.jpg'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout style={{ backgroundImage: 'url(' + homeBG + ')' }}>
          {/* NAVBAR */}
          <Header transparent title="C O S M O L O G U E" style={{ color: 'white' }}>
            <Navigation className='nav'>
              <Link to="/">Home</Link>
              <Link to="/events">Events</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/signup">Signup</Link>
            </Navigation>
          </Header>
          <Drawer className='drawer' title="COSMOLOGUE" style={{ backgroundColor: 'black', color: 'white' }}>
            <Navigation>
              <Link style={{ color: 'white' }} to="/">Home</Link>
              <Link style={{ color: 'white' }} to="/events">Events</Link>
              <Link style={{ color: 'white' }} to="/profile">Profile</Link>
              <Link style={{ color: 'white' }} to="/signup">Signup</Link>
            </Navigation>
          </Drawer>

          {/* PAGE CONTENT */}
          <Content>
            <div className="page-content">
              <Routes />
            </div>
          </Content>

          {/* FOOTER */}
          <footer class="page-footer">
            <a>Cosmologue 2020</a>
            <a href="https://github.com/aseawright1/CosmoLogue" target="_blank"
            >View on GitHub</a>
          </footer>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
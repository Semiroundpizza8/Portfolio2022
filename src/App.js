import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

const app = {
    display: 'flex',
    flexDirection: 'row'
}

const divider = {
    background: 'red',
    width: '2.5%'
};

const content = {
    width: '97.5%',
    display: 'flex',
    flexDirection: 'column'
}

function App() {
  return (
    <div className="App">
          <Home />
          <div style={app} >
              <div style={divider}></div>
              <div style={content}>
                  <About />
                  <Projects />
                  <Contact />
              </div>
          </div>
    </div>
  );
}

export default App;

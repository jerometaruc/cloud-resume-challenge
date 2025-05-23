import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;

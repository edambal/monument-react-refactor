import './App.css';
import Navbar from './components/Landing/Navbar'
import Landing from './pages/Landing';
import Blog from './pages/Blog';
import Footer from './components/Landing/Footer';
import Article from './components/Landing/Article';
import About from './components/Landing/About';
import Gallery from './components/Landing/Gallery';
import Contact from './components/Landing/Contact';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Landing />
     <Article />
     <About />
     <Gallery />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
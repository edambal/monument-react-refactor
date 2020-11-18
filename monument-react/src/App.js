import './App.css';
import {Switch,Route, Redirect} from 'react-router-dom';

import Landing from './pages/Landing';
import Blog from './pages/Blog';
import Navbar from './components/Landing/Navbar'
import Gallery from './components/Landing/Gallery'



function App() {
  return (
    <div className="App">
      <Navbar />
     <Switch>
      {/* <Route exact path="/gallery" component={Gallery} /> */}
      <Route exact path="/" component={Landing} />
      <Route path="/blog" component={Blog} />
     </Switch>
    </div>
  );
}

export default App;

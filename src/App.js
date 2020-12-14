import { BrowserRouter as Router, Route, Link } from "react-router-dom";              
import 'tachyons';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Opportunities from './components/Opportunities';
import JoinUs from './components/JoinUs';
import AboutUs from './components/AboutUs';
// import OpportunitiesCard from './components/OpportunitiesCard';
import Apply from './components/Apply';


function App() {
  return (
    <div className="app">
      <Router>
        
        <Route exact path="/">
          <Navbar />
          <HomePage />
          <Footer />
        </Route>

        <Route path="/opportunities">
          <Navbar />
          <Apply />
          <Footer />
        </Route>

        <Route path="/joinus">
          <Navbar />
          <JoinUs />
          <Footer />
        </Route>

      </Router>
      
    </div>
  );
}

export default App;

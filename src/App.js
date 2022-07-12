import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Education from "./Education/Education";
import Work from './Work/Work';

/* Projects */
import LeagueOfInfo from './LeagueOfInfo/LeagueOfInfo';


function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path="/Site/">
            <Home />
          </Route>

          <Route path="/work">
            <Work />
          </Route>

          <Route path="/education">
            <Education />
          </Route>

          <Route path="/work/leagueofinfo">
            <LeagueOfInfo />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}



export default App;

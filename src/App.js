import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CV from './CV/CV';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Education from './Education/Education';
import Work from './Work/Work';

/* Projects */
import LeagueOfInfo from './LeagueOfInfo/LeagueOfInfo';


function App() {
  return (


    <Router>
      <Navbar />
      <div style={{ backgroundColor: "#FAFAFA", height: "100%", }} className="randomBorder">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/work">
            <Work />
          </Route>

          <Route path="/education">
            <Education />
          </Route>

          <Route path="/leagueofinfo">
            <LeagueOfInfo />
          </Route>

        </Switch>
      </div>
      <div className='bottomBar'></div>
    </Router>

  );
}



export default App;

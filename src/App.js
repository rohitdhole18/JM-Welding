import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Sliding from './components/Design/Sliding.js';
import Grills from './components/Grills/Grills.js';
import Doors from './components/Doors/Doors.js';
import Railings from './components/Railings/Railings.js';
import ContactUs from './components/ContactUs';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {


  return (


    <>
      <Router>
        <Navbar />
        <Switch>

          <Route path="/Sliding">
            <Sliding />
          </Route>
          <Route path="/Grills">
            <Grills />
          </Route>
          <Route path="/Doors">
            <Doors />
          </Route>
          <Route path="/Railings">
            <Railings />
          </Route>
          <Route path="/ContactUs">
            <ContactUs />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;

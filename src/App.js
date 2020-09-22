import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NotFound from './NotFound';
 

function App() {
  return (
   <Router>
      <div className="App">
       <Navbar/>  
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/About" component={About} />
         <Route exact path="/Home" component={Contact} />
         <Route component={NotFound} />
       </Switch>
    </div>
   </Router>
  );
}

export default App;

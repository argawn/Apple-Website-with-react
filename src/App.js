 import React from 'react'
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

          //Home page
import Nav from './Components/Nav/Nav'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

             //pages
import Iphone from './Pages/Iphone/Iphone'
import Mac from './Pages/Mac/Mac'
import Four04 from './Pages/Four04/Four04'
import Productpage from "./Pages/Productpage/Productpage";


import './Assets/css/style.css'

// import Mac from ''
function App() {
  return (
    
    <Router>
    <div>
      <Nav/>
      <Switch>
       <Route path="/" exact component={Main}/>
       <Route path="/iphones" exact component={Iphone}/>
        <Route path="/iphone/:pid"exact component={Productpage}/>
        <Route path="/mac" exact component={Mac}/>
        <Route path="/"component={Four04}/>
      </Switch>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;








          



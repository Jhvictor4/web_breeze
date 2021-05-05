import React from 'react';
import Footer from './views/Footer'
import './App.css';
import CustomNav from "./views/CustomNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Home from './views/Home'
import Intro from "./views/Intro";
import Info from "./views/Info";
import Event from "./views/Event"

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <CustomNav></CustomNav>
          <BrowserRouter>
          <Switch>
              <Route path="/Board/1"><Intro/></Route>
              <Route path="/Event"><Event/></Route>
              <Route path="/Info"><Info/></Route>
              <Route path="/Event"><Intro/></Route>
              <Route path="/Intro"><Intro/></Route>
              <Route path="/"><Home/></Route>
          </Switch>
          </BrowserRouter>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;

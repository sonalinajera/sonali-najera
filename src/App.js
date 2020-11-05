import React, { Component } from 'react'
import AboutMe from './Home/AboutMe';
import AboutMeBonus from './Home/AboutMeBonus';
import Header from './Home/Header';
import Introduction from './Home/Introduction';
import Projects from './Home/Projects';
import Contact from './Home/Contact';
import Footer from './Home/Footer';
import {
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {

  render() {
    return (
      <main className="App">
        <Header/>
        <Switch>
          <Route exact path={['/','/sonali-najera']}>
            <Introduction />
            <AboutMe />
            <Projects />
            <Contact />
          </Route>
          <Route exact path='/about'>
            <AboutMeBonus />
            <AboutMe />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App

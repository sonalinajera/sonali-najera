import React from 'react';
import AboutMe from './Home/AboutMe';
import Header from './Home/Header'
import Introduction from './Home/Introduction'
import Contact from './Home/Contact'

function App() {
  return (
    <main className="App">
      <Header/>
      <Introduction/>
      <AboutMe/>
      <Contact/>
    </main>
  );
}

export default App;

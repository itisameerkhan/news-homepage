import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Section from './Section/Section';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="app-container">
      <div className={show ? 'show-div' : 'hidden-div'}></div>
      <Header show={show} setShow={setShow} />
      <Main />
      <Section />
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl/hub" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/itisameerkhan">Ameer Khan B</a>.
      </div>
    </div>
  )
}

export default App;
import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="app-container">
      <div className={show ? 'show-div' : 'hidden-div'}></div>
      <Header show={show} setShow={setShow} />
      <Main />
    </div>
  )
}

export default App;
import { useState } from 'react';
import './App.css';
import Header from './Header/Header';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="app-container">
      <div className={show ? 'show-div' : 'hidden-div'}></div>
      <Header show={show} setShow={setShow} />
    </div>
  )
}

export default App;
import logo from './logo.svg';
import './App.css';

import Welcome from './components/Welcome';
import { useState } from 'react';

function App() {
  const [isShown, setIsShown] = useState(false);

  const [name , setName] = useState('')

  const handleClick = event => {
   
    setIsShown(true);

  }
  const handleChange = (event) => {
    setName(event.target.value);
    setIsShown(false)
  };

  return (
    <div>
        <h1>Web Development Assignment</h1>
        <p>Enter you name: <input value={name} onChange={handleChange}>

        </input> <button type='submit' onClick={handleClick}>Login</button></p>

        {/* 👇️ show elements on click */}
        {isShown && <Welcome name={name}/>}
        <p>Assignment done by Ashish Kumar Singh(12015585)</p>
    </div>
  );
}

export default App;

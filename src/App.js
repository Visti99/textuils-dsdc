import './App.css';
import AboutUs from './components/Aboutus';
import Navbar from './components/Navbar';//here file navabrimported
import Textform from './components/Textform';//here file textform imported
import { useState } from 'react';

//function is for chnaging color using mode and setmode 
function App() {
  const [mode, setMode] = useState('light')

  const handleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    }
  }

  return (
    // structure of website <.> is entry gate & </> is ending of webistes.
    <>
    {/* first step is NAVBAR */}
      <Navbar mode={mode}
        handleMode={handleMode}
        tittle="textutils"
        aboutText="About us" />
    {/* Main content here */}
      <div className='p-5'>

    {/* <Textform /> */}
        <Textform mode={mode} />

    {/* about us  */}
        <AboutUs></AboutUs>
      </div>
    </>
  );
}

export default App;

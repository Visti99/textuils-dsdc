import './App.css';
import Navbar from './components/Navbar';//here file navabrimported
import Textform from './components/Textform';//here file textform imported
import AboutUs from './components/Aboutus';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import Github from './components/Github'


//function is for chnaging color using mode and setmode 
function App() {
  const [mode, setMode] = useState('light')
  const[alert, setAlert] = useState(null)


  const showAlert = (type,message) => {
    setAlert({type:type, message:message})

//settimeout is using for set a timg for any mesage then content is timeout after 5000ms means 5sec.
    setTimeout(function(){
      setAlert(null)
    },5000)
  }
//




//here condition is changing bg coloe to dark mode 
  const handleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('success', "light mode is Enabled");
     
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert('success', "Dark mode is Enabled");
    }
  }

  return (
    // structure of website <.> is entry gate & </> is ending of webistes.
    <>
    {/* <BrowserRouter> */}
    {/* first step is NAVBAR */}
      <Navbar mode={mode}
        handleMode={handleMode}
        tittle="textutils"
        aboutText="About us" />

        <Alert alert={alert}/>
    {/* Main content here */}
      <div className='p-5'>
    {/* <Routes> */}
      {/* <Route path="/" */}
              {/* // element={<Textform showAlert={showAlert}  mode={mode} />}/> */}
              <Textform showAlert={showAlert}  mode={mode} />

    {/* about us  */}
      {/* <Route path="/aboutus" */}
             {/* element={<AboutUs/>}/>  */}
             <AboutUs/>

    {/*This is for Github link  */}
      {/* <Route path="/github" 
             element={<Github /> }/> */}
             <Github />

        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;

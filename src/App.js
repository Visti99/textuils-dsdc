import './App.css';
import Navbar from './components/Navbar';//here file navabrimported
import Textform from './components/Textform';//here file textform imported

function App() {
  return (
    <>
      <Navbar  tittle="textutils" about="About us" />
      <div className='p-5'>
      <Textform />
    </div>
    </>
  );
}

export default App;

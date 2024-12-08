import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import PropTypes from 'prop-types'
import {useState} from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const [alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>
  {
    
    setAlert(
      {
        msg:message,
        type:type,
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode=()=>
  {
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode has been enabled","success");

    }
    }
  return (
    <>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading="enter the Text for Analysis" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
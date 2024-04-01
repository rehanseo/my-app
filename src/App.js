import logo from './logo.svg';
import './App.css';
import './components/TextForms.js';
import TextForms from './components/TextForms.js';
import About from './components/About.js';
import NavBar from './components/NavBar.js';
import React,{useState} from 'react';
import Alert from './components/Alert.js';

function App() {
  const [mode,setMode] =useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ='grey';
      showAlert(" Dark mode has bee enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled","success");
    }
  }
  return (
    <>
    <div className="container mb-3">
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3"></div>
    <TextForms heading="Enter the text to Analyze below" mode={mode}/>
    <About/>
   
    </div>
    </>
  );
}

export default App;

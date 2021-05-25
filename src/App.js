import React from 'react';
import './App.css';
import Login from './components/loginInterface';
import Application from './components/application';

function App() {
  let login = localStorage.getItem('login');
  let pwd = localStorage.getItem('pwd');
  let val = (login==='test@gmail.com' && pwd==='1234')?true:false;
  return (
    <div className="App">
      {val===true ? <Application/> : <Login/>}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [name,setname]=useState("Manasa")
  const [password,setPassword]=useState("123456")
  function save(){
     fetch("http://localhost:3005/newData",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({username:name,password:password})
    })
    .then((res)=>{
      console.log(res)
      if(res.status===200)
        alert("registration successfull")
    })
    .catch((err)=>{
      alert(err)
    })
  }
  return (
    <div className="App">
      <button onClick={save}>Click</button>
    </div>
  );
}

export default App;

import './App.css'
import {useRef, useState, useCallback} from 'react'

export default function App() {
  const [password,setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  
  const passwordRef = useRef(null);
  const generatePassword = useCallback(()=>{
    const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numSet = "0123456789";
    const symbols = "!@#$%^&*()-_+=<>?";

    let finalSet = charSet;
    if(includeNumbers){
      finalSet+=numSet;
    }
    if(includeCharacters){
      finalSet+=symbols;
    }

    let newPassword = "";
    for(let i=0;i<length;i++){
      let randomIndex = Math.floor(Math.random()*finalSet.length);
      newPassword+=finalSet[randomIndex];
    }
    setPassword(newPassword);
    

  },[length,includeNumbers,includeCharacters])

  const copyToClipboard = () =>{
    if(passwordRef.current){
      passwordRef.current.select();
      document.execCommand("copy");
      alert("password copied to clipboard")
    }
  };
  
  return (
    <div className='container'>
    
    <div className="container-body">
    <h1>Password Generator</h1>
      <label>Password Length:
        <input value={length} onChange={(e)=>setLength(e.target.value)} type="number" />
      </label>
      <br/>
      <label>
        Include Numbers:
        <input checked={includeNumbers} onChange={()=>setIncludeNumbers(prev=>!prev)} type="checkbox"/>
      </label>
      <br/>
      <label>
        Include Special Characters:
        <input checked={includeCharacters} onChange={()=>setIncludeCharacters(prev=>!prev)} type="checkbox"/>
      </label>
      <br/>
      <button onClick={generatePassword}>Generate Password</button>
      <br/>
      {password===""?null:
        <>
        <textarea ref={passwordRef} value={password} readOnly/>
        <button onClick={copyToClipboard}>Copy to Clipboard</button>
      </>
      }
      
    </div>
    </div>
  )
}

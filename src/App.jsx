import { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

let progressInterval =  null;

function App() {

  const [progress, setProgress] = useState(0)

  useEffect(()=>{
    progressInterval = setInterval(()=>{
      setProgress(prev => {
        if(prev >=100){
          clearInterval(progressInterval);
          return 100;
        }
        else{
          return prev+1;
        }
      });
    },100);

    return ()=> clearInterval(progressInterval);
  },[]);


  return (
    <>
    <h3>Progress Bar</h3>
    <ProgressBar now={progress} label={`${progress}%`} />
    {
      progress<100 ? <div>Loading...</div>:<div>Complete!</div> 
    }

    </>
    
  )
}

export default App

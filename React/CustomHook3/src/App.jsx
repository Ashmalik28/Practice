
import './App.css'
import {useRef} from 'react'


function useDebounce(originalfn){
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalfn , 500);
  }

  return fn;

  
}

function App() {
  function sendDataToBackend(){
    fetch("api.amazon.com/search/");
  }

  const debouncedFn = useDebounce(sendDataToBackend);
  

  return (
    <div>
    <input type='text' onChange={debouncedFn}></input>
    </div>
  )
}

export default App

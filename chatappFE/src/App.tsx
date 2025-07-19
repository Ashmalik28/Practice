
import { useEffect, useRef } from 'react'
import { useState } from 'react';
import './App.css'

function App() {
  const [messages , setMessages] = useState(["hi there" , "hello"]);
  const wsRef = useRef();

  useEffect(()=> {
    const ws = new WebSocket("http://localhost:8080")
    ws.onmessage = (event) => {
      setMessages(m => [...m , event.data])
    }
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type : "join" ,
        payload : {
          roomId : "red"
        }
      }))
    }
   } , []);

  return (
    <>
    <div className='h-screen bg-black'>
       <div className='h-[95vh] p-10'>
        {messages.map(message => <div className='mb-10'><span className='bg-white text-black rounded p-4'>{message}</span></div> )}
       </div>
       <div className='bg-gray-200 flex '>
        <input id='message' className='w-full p-4' type="text" placeholder='Enter your message'/>
        <button onClick={() => {
          const message = document.getElementById("message")?.value;
          wsRef.current.send(JSON.stringify({
            type : "chat",
            payload : {
              message : message
            }
          }))

        }} className='bg-purple-600 text-white'>Send Message</button>
       </div>

    </div>
      
    </>
  )
}

export default App

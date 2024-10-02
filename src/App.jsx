import { useState } from 'react'
import './App.css'
import { AddMsg } from './AddMsg';
import { deliverMsg } from './actions';

function App() {
  const [messages, setMessages] = useState([{
    text: 'Hello world!', sending: false, key: 1
  }]);

  const sendMessage = async (msg) => {
    const text = await deliverMsg(msg);
    setMessages([...messages, { text, sending: false, key: messages.length + 1}])
  }


  return (
    <>
      <AddMsg messages={messages} sendMessage={sendMessage} />
    </>
  )
}

export default App

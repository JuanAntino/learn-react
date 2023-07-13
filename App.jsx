import logo from '/monkey.jpg'
import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={logo} width={250}/>
      <h1>I am a Monkey child...</h1>
      <div className="card">
        <p>Eaaaaa Eaaaaa</p>
      </div>
      <div>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      </div>
    </>
  )
}

export default App

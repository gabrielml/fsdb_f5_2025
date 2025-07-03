import './App.css'
import Botoncito from './components/Botoncito/Botoncito.jsx'
import Card from './components/Card/Card.jsx'

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Botoncito number="1"/>
      <Botoncito number="2"/>
      <Botoncito number="3"/>
      <Botoncito number="4"/>
      <Card/>
    </>
  )
}

export default App

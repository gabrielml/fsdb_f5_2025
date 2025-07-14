import './App.css'
import { Stopwatch } from './components/Stopwatch/Stopwatch'

function App() {

  return (
    <div className="app">
      <h1 className='app__title'>Welcome to React exercises part 2</h1>
      <div className='app__container'>
        <Stopwatch/>
        {/* <ReactionGame/> */}
      </div>
    </div>
  )
}

export default App

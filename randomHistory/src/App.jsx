import './App.css'
import Display from './components/Display'
import Random1 from './components/Random1'
import ScoreBar from './components/ScoreBar'
import SideBar from './components/SideBar'

function App() {

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col w-full">
          <ScoreBar />
          <Display />
          <Random1 />
        </div>
        <SideBar />

      </div>
    </>
  )
}

export default App

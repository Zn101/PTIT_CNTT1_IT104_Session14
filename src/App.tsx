import Exercise01 from './components/Exercise01'
import Notification from './components/Notification'
import Exercise03 from './components/Exercise03'
import Exercise04 from './components/Exercise04'
import Exercise05 from './components/Exercise05'
import Exercise06 from './components/Exercise06'
import Exercise07 from './components/Exercise07'
import Exercise08 from './components/Exercise08'

const App = () => {
  return (
    <div>
      <div style={{ padding: "16px", border: "2px solid red", marginBottom: "10px" }}>
        <Exercise01 />
      </div>
      <div style={{ padding: "16px", border: "2px solid red", marginBottom: "10px" }}>
        <Notification />
      </div>
      <div style={{ padding: "16px", border: "2px solid red", marginBottom: "10px" }}>
        <Exercise03 />
      </div>
      <div style={{ padding: "16px", border: "2px solid red", marginBottom: "10px" }}>
        <Exercise04 />
      </div>
      <div style={{ padding: "16px", border: "2px solid red", marginBottom: "10px" }}>
        <Exercise05 />
      </div>
      <div style={{ padding: "16px", border: "2px solid red", marginBottom: "10px" }}>
        <Exercise06 />
      </div>
      <div style={{ padding: "16px", border: "2px solid red", marginBottom: "10px" }}>
        <Exercise07 />
      </div>
      <div style={{ padding: "16px", border: "2px solid red", marginBottom: "10px" }}>
        <Exercise08 />
      </div>
    </div>
  )
}

export default App

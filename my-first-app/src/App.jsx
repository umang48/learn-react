import './App.css'
import Greeting from './components/Greeting';
import Usercard from './components/Usercard'; 

function App() {

  return (
    <>
      <Greeting />
      <Usercard name="Umang Prajapati" age={30} city="Ahmedabad" />
    </>
  )
}

export default App

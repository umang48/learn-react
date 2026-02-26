import './App.css'
import Greeting from './components/Greeting';
import Usercard from './components/Usercard'; 
import Counter from './components/Counter';
import HandlingForms from './components/HandlingForms';
import LiveSearch from './components/LiveSearch';
function App() {

  return (
    <>
      <Greeting />
      <Usercard name="Umang Prajapati" age={30} city="Ahmedabad" />
      <Counter />
      <HandlingForms/>
      <LiveSearch />
    </>
  )
}

export default App

import './App.css'
import Greeting from './components/Greeting';
import Usercard from './components/Usercard'; 
import Counter from './components/Counter';

function App() {

  return (
    <>
      <Greeting />
      <Usercard name="Umang Prajapati" age={30} city="Ahmedabad" />
      <Counter />
    </>
  )
}

export default App

import './App.css'
import Greeting from './components/Greeting';
import Usercard from './components/Usercard'; 
import Counter from './components/Counter';
import HandlingForms from './components/HandlingForms';
import LiveSearch from './components/LiveSearch';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
function App() {

  return (
    <>
      <Greeting />
      <Usercard name="Umang Prajapati" age={30} city="Ahmedabad" />
      <Counter />
      <HandlingForms/>
      <LiveSearch />
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/users">Users</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

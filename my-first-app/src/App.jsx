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
import UserDetail from './pages/UserDetail';
import NotFound from './pages/NotFound';
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
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

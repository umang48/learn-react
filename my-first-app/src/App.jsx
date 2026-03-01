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
      { /* 
      <Greeting />
      <Usercard name="Umang Prajapati" age={30} city="Ahmedabad" />
      <Counter />
      <HandlingForms/>
      <LiveSearch />
      */}
      <BrowserRouter>
      <nav className='bg-blue-600 px-6 py-4 flex gap-6 shadow-md'>
        <Link to="/" className={({ isActive }) =>
            isActive ? "text-yellow-300 font-semibold" : "text-white hover:text-yellow-200"
          }>Home</Link> |
        <Link to="/about" className={({ isActive }) =>
            isActive ? "text-yellow-300 font-semibold" : "text-white hover:text-yellow-200"
          }>About</Link> |
        <Link to="/users" className={({ isActive }) =>
            isActive ? "text-yellow-300 font-semibold" : "text-white hover:text-yellow-200"
          }>Users</Link>
      </nav>
      <div className='max-w-4xl mx-auto px-6 py-8'>
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

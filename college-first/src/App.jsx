import { BrowserRouter, Route,Routes, Link } from 'react-router-dom';
import Home from './class/Home';
import About from './class/About';
import Contact from './class/Contact'

function App(){
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<h1>404 File Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
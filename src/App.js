import logo from './logo.svg';
import {BrowserRouter,Routes,Route}from "react-router-dom"
import Home from './Home';
import About from './About';

function App() {
  return <>
  <BrowserRouter basename='/test2'>
  <Routes>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
}

export default App;

import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GetCats from './components/GetCats'
import GetDogs from './components/GetDogs'



function App() {
  return (
    <div className="App">
      <div className='links'>
        {/* 'NavLink' links your pages. */}
        <nav>
          <NavLink to={"/"} >Home</NavLink>
          <NavLink to={"GetCats"} >GetCats</NavLink>
          <NavLink to={"GetDogs"} >GetDogs</NavLink>
        </nav>  
      </div>

      <div>
      {/* // 'Routes' renders your pages. */}
      <Routes>
      // 'Route' in singular form is a self-closing tag.
        <Route path='/' element={<Home /> } />
        <Route path='GetCats' element={<GetCats /> } />
        <Route path='GetDogs' element={<GetDogs /> } />
      </Routes>
     
      </div>


    </div>
  );
}

export default App;

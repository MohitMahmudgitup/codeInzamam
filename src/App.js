//CSS
import './App.css';
import './ComponentCSS/Navbar.css';
import './ComponentCSS/Home.css';


//Java Script
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';

function App() {
  const [navIcon, setNavIcon] = useState("https://cdn-icons-png.flaticon.com/128/11395/11395198.png")
  const [navItem, setNavItem] = useState("clickOnNavs")

const displayNone = () =>{
  if (navItem === navItem){
    setNavItem("clickOnNavs")
    setNavIcon("https://cdn-icons-png.flaticon.com/128/11395/11395198.png")
  }
}

  const clickNavIcon = ()=>{
    if(navIcon=== "https://cdn-icons-png.flaticon.com/128/11395/11395198.png"){
      setNavIcon("https://cdn-icons-png.flaticon.com/128/2732/2732657.png")
      setNavItem("navItem")
    }
    else{
      setNavIcon("https://cdn-icons-png.flaticon.com/128/11395/11395198.png")
      setNavItem("clickOnNavs")

    }

 }
  return (
<>
<Navbar  clickNavIcon={clickNavIcon} navIcon={navIcon} navItem={navItem} displayNone={displayNone} />
<Routes>

  <Route path='/' element={<Home />}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>

</Routes>
</>
  );
}

export default App;

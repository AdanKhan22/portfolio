

import { Menu, MenuItem}  from "./components/navbar/navbar"
import { useState } from "react";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/project"

function App() {
  const [active, setActive] = useState<string | null>(null);
  
  
  return (
    <>

  <div id="content">    
  <div>
    <Menu setActive={setActive}>
       <a href="/">
           <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>       
       </a>
       <a href="#about">
            <MenuItem setActive={setActive} active={active} item="About"> </MenuItem>
       </a>
       <a href="#skills">
            <MenuItem setActive={setActive} active={active} item="Skills"></MenuItem>
        </a>
        <a href="#projects"> 
            <MenuItem setActive={setActive} active={active} item="Projects"></MenuItem>
        </a>
        <a href="#education">
            <MenuItem setActive={setActive} active={active} item="Timeline"></MenuItem>
        </a>
        {/* Here add the download CV File */}
        {/* <a href=""> */} 
        <button className="px-4 py-2 text-white rounded-lg box">Download CV</button>
        {/* </a> */}
      </Menu>
      
     </div>
         <Hero></Hero>
         <About></About>
         <Skills></Skills>
         <Projects></Projects>
      </div>
    </>
  );
}

export default App;

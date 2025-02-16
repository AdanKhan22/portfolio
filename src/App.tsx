

import { Menu, MenuItem}  from "./components/navbar/navbar"
import { useState } from "react";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/project"
// import Experience from "./components/Experience/experience";
import Footer from "./components/Footer/footer";

function App() {
  const [active, setActive] = useState<string | null>(null);
  
  
  return (
    <>

  <div id="content">    
  <div>
    
      
     </div>
         <Hero></Hero>
         <About></About>
         <Skills></Skills>
         <Projects></Projects>
         {/* <Experience></Experience> */}
         <Footer></Footer>
      </div>
    </>
  );
}

export default App;

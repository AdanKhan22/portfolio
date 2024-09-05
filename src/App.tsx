

import { Menu, MenuItem, ProductItem }  from "./components/navbar/navbar"
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
    <div className="" >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <ProductItem
            title="Product 1"
            description="Description of product 1"
            href="#"
            src="path/to/image.jpg"
          />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <ProductItem
            title="Product 2"
            description="Description of product 2"
            href="#"
            src="path/to/image2.jpg"
          />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Skills">
          <ProductItem
            title="Product 2"
            description="Description of product 2"
            href="#"
            src="path/to/image2.jpg"
          />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <ProductItem
            title="Product 2"
            description="Description of product 2"
            href="#"
            src="path/to/image2.jpg"
          />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Timeline">
          <ProductItem
            title="Product 2"
            description="Description of product 2"
            href="#"
            src="path/to/image2.jpg"
          />
        </MenuItem>
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

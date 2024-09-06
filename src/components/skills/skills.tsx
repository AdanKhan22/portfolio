
import Box from "./box";

import Cpluslpus from "../../assets/c++.svg"
import C from "../../assets/c-1.svg"
import laravel from "../../assets/laravel-2.svg"
import java from "../../assets/java.svg"
import git from "../../assets/git-icon.svg"
import firebase from "../../assets/firebase-1.svg"
import JS from "../../assets/javascript-1.svg"
import TS from "../../assets/typescript.svg"
import NextJS from "../../assets/nextjs-2.svg"
import React from "../../assets/react-2.svg"
import Redux from "../../assets/redux.svg"
import tailwind from "../../assets/tailwind-css-2.svg"
import mysql from "../../assets/mysql-3.svg"

import Gradient from "../headerGradient.ts"

export default function skills() {
  return (
    <section id="skills">
    <div className="bg-transparent flex flex-col items-center justify-start ">
            <h1 className="text-white text-6xl font-bold mb-8 font-poppins" style={Gradient} >SKILLS</h1>
                   <div className="flex flex-row m-5 p-2 flex-wrap max-w-5xl">
                     <Box alt="C++" text="C++" href="https://en.cppreference.com/w/" 
                               src={Cpluslpus}
                               color="bg-violet-600"  ></Box>   
                     <Box alt="C" text="C" href="https://devdocs.io/c/"  
                               src={C}
                               color="bg-violet-600"  ></Box>   
                     <Box alt="PHP" text="PHP" href="https://www.php.net" 
                               src="https://www.php.net/images/logos/new-php-logo.svg"
                               color="bg-violet-600"  ></Box>   
                     <Box alt="Laravel" text="Laravel" href="https://laravel.com" 
                               src={laravel}
                               color="bg-violet-600"  ></Box>   
                     <Box alt="Java" text="Java" href="https://www.java.com" 
                               src={java}
                               color="bg-violet-600"  ></Box>   
                     <Box alt="Git" text="Git" href="https://git-scm.com" 
                               src={git}
                               color="bg-violet-600"  ></Box>   
                     <Box alt="Firebase" text="Firebase" href="https://firebase.google.com" 
                               src={firebase}
                               color="bg-violet-600"  ></Box>   
                     <Box alt="JS" text="JavaScript" href="https://developer.mozilla.org" 
                               src={JS}
                               color="bg-violet-600"  ></Box>   
                     <Box alt="TS" text="TypeScript" href="https://www.typescriptlang.org" 
                               src={TS}
                               color="bg-violet-600"  ></Box>   
                     <Box alt="React" text="React" href="https://react.dev" 
                               src={React}
                               color="bg-violet-600"  ></Box>   
                     <Box alt="NextJS" text="NextJS" href="https://nextjs.org" 
                               src={NextJS}
                               color="bg-violet-600"  ></Box>   
                     <Box alt="Redux" text="Redux" href="https://redux.js.org" 
                               src={Redux}
                               color="bg-violet-600"  ></Box>   
                     <Box alt="Tailwind" text="Tailwind" href="https://tailwindcss.com" 
                               src={tailwind}
                               color="bg-violet-600"  ></Box>   
                   <Box alt="Bootstrap" text="Bootstrap" href="https://getbootstrap.com" 
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/240px-Bootstrap_logo.svg.png"
                             color="bg-violet-600"  ></Box>                         
                     <Box alt="Mysql" text="SQL" href="https://getbootstrap.com" 
                               src={mysql}
                               color="bg-violet-600"  ></Box>   


                 </div>
    </div>
    </section>
  )
}

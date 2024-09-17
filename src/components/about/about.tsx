
import Slogan from "../slogan/slogan.tsx";


//Logos Imports
import Instagram from "../../assets/Social_Media_Logos/instagram-2022.svg"
import LinkedIn from "../../assets/Social_Media_Logos/linkedin-icon.svg"
import Github from "../../assets/Social_Media_Logos/github-icon-1.svg"




export default function About() {
    return (
      <section id="about"> 
      <div className="bg-transparent flex flex-col items-center justify-start content-between mx-10 md:mx-3 lg:mx-0">
      
        <h1 className="text-gray-100 text-6xl font-bold mb-8 md:mb-2 font-poppins">ABOUT ME</h1>
  
      
        <div className="flex flex-col lg:flex-row items-start justify-start space-y-8 md:space-y-0 md:space-x-16 w-full md:w-2/3 lg:flex-row mt-20">
         
  
          <div className="w-full lg:w-1/2 text-white">
            <p className="mb-4 md:mb-2 font-firasans text-xl ">
            Hey there! I'm a Computer Science student with a passion for programming and constant learning <br /> <br />I love diving into real-world projects to put my skills to the test and grow along the way. I’m comfortable with various programming languages and excited about the possibilities in software development. <br /> <br /> My goal is to keep learning and improving while working on projects that challenge me and push boundaries. <br /><br /> If you're looking for someone who’s eager, driven, and ready to bring fresh ideas to the table, I’m your person!
            </p> 
            <div className="space-x-4 flex flex-row gap-4">
              <a href="/" className="text-blue-400 hover:underline"><img src={Instagram} alt="Instagram" 
                                                                     className="max-w-full max-h-10 object-contain" /></a>
              <a href="https://www.linkedin.com/in/adan-khan-195abb28a" className="text-blue-400 hover:underline"><img src={LinkedIn} alt="Instagram" 
                                                                     className="max-w-full max-h-10 object-contain" /></a>
              <a href="https://github.com/AdanKhan22" className="text-blue-400 hover:underline"><img src={Github} alt="Instagram" 
                                                                     className="max-w-full max-h-10 object-contain bg-white rounded-2xl" /></a>
            
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src=""
              alt="Profile Image"
              className="w-64 h-64 rounded-full object-cover"
            />
          </div>
        </div>   
        <div className="my-20">  
          <Slogan></Slogan>     
        </div>           
      </div>
      </section>
    );
  }
  
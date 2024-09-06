
import Slogan from "../slogan/slogan.tsx";
// import Display from "../vortex/display.tsx"


export default function About() {
    return (
      <div className="h-screen bg-transparent flex flex-col items-center justify-start content-between">
      
        <h1 className="text-white text-4xl font-bold mb-8">About Me</h1>
  
      
        <div className="flex flex-col md:flex-row items-start justify-start space-y-8 md:space-y-0 md:space-x-16 w-full md:w-2/3 mt-20">
         
  
          <div className="w-full md:w-1/2 text-white">
            <p className="mb-4">
            Hey there! I'm a Computer Science student with a passion for programming and constant learning. I love diving into real-world projects to put my skills to the test and grow along the way. I’m comfortable with various programming languages and excited about the possibilities in software development. My goal is to keep learning and improving while working on projects that challenge me and push boundaries. If you're looking for someone who’s eager, driven, and ready to bring fresh ideas to the table, I’m your person!
            </p>
            <div className="space-x-4">
              <a href="/" className="text-blue-400 hover:underline">Link</a>
              <a href="/" className="text-blue-400 hover:underline">Insta</a>
              <a href="/" className="text-blue-400 hover:underline">You</a>
              <a href="/" className="text-blue-400 hover:underline">Me</a>
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
        <div className="h-screen flex items-center justify-center">
          <Slogan></Slogan>
        </div>
          {/* <Display></Display> This thing really fucks the performance */}
      </div>
    );
  }
  
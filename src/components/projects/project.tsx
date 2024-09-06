
import { CardBody, CardContainer, CardItem } from "./card";
import Gradient from "../headerGradient.ts";
import LogoBar from"./logobar.tsx"
//Logo Imports
import { card1Logos , card2Logos } from "./logos.ts";


export function Projects() {
 
  return (
    <section id="projects">
      
      <div className="h-screen bg-transparent flex flex-col items-center justify-start">
        <h1 className="text-6xl font-bold mb-8 font-poppins" style={Gradient}>
          PROJECTS

        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-2/3">
          {/* Card 1 */}
          <CardContainer className="inter-var">
            <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
             <div className="flex flex-row justify-between items-center">
              <CardItem translateZ="50" className="text-2xl font-bold text-sky-500 dark:text-white">
                 SoleStash
              </CardItem>
              <CardItem translateZ="50" className="text-2xl font-bold text-sky-500 dark:text-white">
                               <div className="flex flex-row">
                               <LogoBar items={card1Logos} />
                               </div>
              </CardItem>
            </div> 
              <CardItem translateZ="100" className="w-full mt-3 max-h-80">
                <img
                  src="https://i.ibb.co/wcY0CfS/Screenshot-15.png"
                  className="h-70 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300">
              Sole-Stash is an e-commerce website that primarly deals with selling thrifted shoes
              </CardItem>
              <div className="flex justify-between items-center ">
                <a href="https://github.com/AdanKhan22/Project-SoleStash">
                <CardItem translateZ={20} as="div" href="www.google.com" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal text-white">
                  View Code →
                </CardItem>
                </a>
                <a href="https://project-sole-stash.vercel.app">
                <CardItem  translateZ={20} as="div" className="px-4 py-2 mt-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold box"                                                               >
                  Live Preview
                </CardItem>
                </a>
              </div>
            </CardBody>
          </CardContainer>
          {/* Card 2 */}
          <CardContainer className="inter-var">
            <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <div className="flex flex-row justify-between items-center">
              <CardItem translateZ="50" className="text-2xl font-bold text-sky-500 dark:text-white">
                Casual Game
              </CardItem>
              <CardItem translateZ="50" className="text-2xl font-bold text-sky-500 dark:text-white">
                               <div className="flex flex-row">
                               <LogoBar items={card2Logos} />
                               </div>
              </CardItem>
              </div>
              <CardItem translateZ="100" className="w-full mt-3 max-h-80">
                <img
                  src="https://i.ibb.co/JRC18k9/Screenshot-2.png"
                  className="h-70 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300">
                An ecommerce website for thrifted shoes
              </CardItem>
              <div className="flex justify-between items-center">
                <a href="https://github.com/AdanKhan22/Gambling-Game">
                <CardItem translateZ={20} as="div" href="www.google.com" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal text-white">
                  View Code →
                </CardItem>
                </a>
                <a href="https://adankhan22.github.io/Gambling-Game/">
                <CardItem  translateZ={20} as="div" className="px-4 py-2 mt-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold box"                                                               >
                  Live Preview
                </CardItem>
                </a>
              </div>
            </CardBody>
          </CardContainer>
        
        </div>
      </div>
    </section>
  );
}
export default Projects;

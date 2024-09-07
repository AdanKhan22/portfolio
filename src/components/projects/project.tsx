
import { CardBody, CardContainer, CardItem } from "./card";
import Gradient from "../headerGradient.ts";
import LogoBar from"./logobar.tsx"
//Logo Imports
import { card1Logos , card2Logos , card3Logos} from "./logos.ts";


export function Projects() {
 
  return (
    <section id="projects">
      <div className="bg-transparent flex flex-col items-center justify-start my-20">
        <h1 className="text-6xl font-bold mb-8 font-poppins" style={Gradient}>
          PROJECTS

        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-2/3 sm:gap-0 lg:gap-64 xl:gap-32 ">
          {/* Card 1 */}
          <CardContainer className="inter-var">
            <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
             <div className="flex flex-row justify-between items-center">
              <CardItem translateZ="50" className=" text-3xl font-bold text-zinc-200 dark:text-white font-Roboto font-semibold">
                 Sole-Stash
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
              <CardItem as="p" translateZ="60" className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300 font-poppins font-medium px-2">
                 Sole-Stash is an e-commerce website that deals with selling thrifted shoes. This was the first fullstack project i have worked on and it taught me a lot about backend development
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
               <CardItem translateZ="50" className=" text-3xl font-bold text-zinc-200 dark:text-white font-Roboto font-semibold">
                Mega Mind
               </CardItem>
              <CardItem translateZ="50" className="text-2xl font-bold text-sky-500 dark:text-white">
                               <div className="flex flex-row">
                               <LogoBar items={card3Logos} />
                               </div>
              </CardItem>
              </div>
              <CardItem translateZ="100" className="w-full mt-3 max-h-80">
                <img
                  src="https://i.ibb.co/d2cwM1m/Screenshot-4.png"
                  className="h-70 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300">
              MegaMind is a comprehensive resource website designed specifically for <strong>newcomers</strong> to the field of computer science.It serves as a roadmap for those on their journey in tech, offering a well-structured roadmap and addressing the common challenges faced by beginners.              </CardItem>
              <div className="flex justify-between items-center">
                <a href="https://github.com/AdanKhan22/MegaMind-">
                <CardItem translateZ={20} as="div" href="www.google.com" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal text-white">
                  View Code →
                </CardItem>
                </a>
                <div className="cursor-not-allowed ">
                <CardItem  translateZ={20} as="div" className=" px-4 py-2 mt-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold "                                                               >
                     &#x1F528;In developemnt
                </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
          {/* Card 3 */}
          <CardContainer className="inter-var">
            <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <div className="flex flex-row justify-between items-center">
               <CardItem translateZ="50" className=" text-3xl font-bold text-zinc-200 dark:text-white font-Roboto font-semibold">
                Stake Game
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
               Stake Game is a  <strong>non-gambling,</strong> virtual currency-based replica of the original Stake Game. Designed to offer a thrilling and immersive gaming experience without the risks associated with real-money betting, this game allows players to engage in exciting gameplay using virtual currency.
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
  
          {/* Card 4 */}
          <CardContainer className="inter-var">
            <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <div className="flex flex-row justify-between items-center">
               <CardItem translateZ="50" className=" text-3xl font-bold text-zinc-200 dark:text-white font-Roboto font-semibold">
                Smart GPA Tracker
               </CardItem>
              <CardItem translateZ="50" className="text-2xl font-bold text-sky-500 dark:text-white">
                               <div className="flex flex-row">
                               <LogoBar items={card2Logos} />
                               </div>
              </CardItem>
              </div>
              <CardItem translateZ="100" className="w-full mt-3 max-h-80">
                <img
                  src="https://i.ibb.co/qn0ztNf/Screenshot-5.png"
                  className="h-70 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300">
              The Smart GPA Tracker is not just another GPA calculator – it’s a tailored tool designed to help students track their academic progress with precision and ease.Whether you’re aiming for honors or just want to keep track of your academic journey, Smart GPA Tracker offers insightful predictions and personalized feedback based on past semesters  </CardItem>
              <div className="flex justify-between items-center">
                <a href="https://github.com/AdanKhan22/GPA-calculator-cust">
                <CardItem translateZ={20} as="div" href="www.google.com" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal text-white">
                  View Code →
                </CardItem>
                </a>
                <a href="https://adankhan22.github.io/GPA-calculator-cust/">
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

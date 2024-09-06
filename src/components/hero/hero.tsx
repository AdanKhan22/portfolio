import { TextGenerateEffect } from "./text-generate-effect";
import { TypewriterEffectSmooth } from "./typewritter-effect";


export default function hero() {

    const words = "ADAN KHAN";
    const Typewords = [
      {
        text: "Developer",
      },
      {
        text: "Programmer",
      },
      {
        text: "Innovator",
      },
    ]


  return (
    <>
     <div className="flex items-center justify-center h-screen bg-transparent flex-col">
        <TextGenerateEffect duration={3} filter={false} words={words} />;
        <TypewriterEffectSmooth words={Typewords} />
    </div>
    </>
  )
}

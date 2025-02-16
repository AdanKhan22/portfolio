import { Pong } from "./Pong.tsx";



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
        <Pong></Pong>
    </div>
    </>
  )
}

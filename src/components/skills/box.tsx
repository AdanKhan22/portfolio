
interface BoxProps {
    alt:string; 
    text:string;
    href:string;
    src:string;
    color:string;
}


export default function box({alt , text , href , src } : BoxProps) {
  return (
    <>
    <a href={href}>
    <div className="text-white flex flex-row items-center content-center p-3 mt-6 mr-3 ml-3 border-2 border-sky-800 border-solid rounded-xl
                pointer-events-auto transition duration-500 ease-out 
                hover:bg-cyan-900 hover:animate-pulse active:bg-cyan-900 focus:ring-2 focus:ring-blue-500 
                active:border-blue-500 focus:outline-none active:animate-bounce">
      <img 
        className="max-w-full max-h-8 object-contain" 
        src={src}
        alt={alt} 
      />
      <span className="ml-2">{text}</span>
    </div>
    </a>
    </>
  )
}

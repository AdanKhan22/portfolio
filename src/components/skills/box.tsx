
interface BoxProps {
    alt:string; 
    text:string;
    href:string;
    src:string;
    color:string;
}


export default function box({alt , text , href , src , color} : BoxProps) {
  return (
    <>
    <a href={href}>
      <div className={`text-white flex flex-row items-center content-center p-3 mt-6 mr-3 ml-3 border-2 border-amber-950 border-solid rounded-xl 
                       hover:${color} active:${color} focus:outline-none focus:ring focus:ring-violet-300`}>
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

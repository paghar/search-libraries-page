interface IBtnProps{   
  id?: string,
  type:"button" | "submit" | "reset",
  className?:string,
  onClick:(event: any)=>void,
  children?: React.ReactNode,
  text?:string 
}
  
const Button = (props:IBtnProps) => {
  return (
    <button 
      id={props.id}
      type={props?.type}       
      onClick={props?.onClick}  
      className={`${props.className}
        inline-flex items-center 
        py-2.5 px-3 ml-2 text-sm 
        font-medium text-white
        bg-pink-700 rounded-lg border border-pink-700
        hover:bg-pink-800 focus:ring-4 
        focus:outline-none focus:ring-pink-300
        dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800
      `}        
    >
      {props.children}             
      {props.text}         
    </button>   
  );
};
  
export default Button;
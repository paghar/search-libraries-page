interface IInputProps{  
  id?: string,  
  value?:string | number ,
  type: "text" | "number" | "textArea"| "color" ,
  placeholder?:string,
  onChange?:(e:any) => void,
  name?:string,
}
    
const Textbox = (props:IInputProps) => {
  return (
    <input 
      id ={props?.id}
      className="
        bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
        focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 p-2.5 
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
        dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500
        "                       
      value={props?.value}
      type={props?.type}
      placeholder={props?.placeholder} 
      onChange={props.onChange}
      name={props?.name}  
    />  
  );
};
    
export default Textbox;
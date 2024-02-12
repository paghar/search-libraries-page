import DownArrow from "./misc/svg/DownArrow";
import {ISelectBox, ISelectBoxItem} from "../utils/interface/misc";


const SelectBox = ((props:ISelectBox)=>{  

  const items = props?.items?.map((item:ISelectBoxItem)=>{        
    return <option key={item.value} value={item.value}>{item.text}</option>; 
  });

  return(       
    <div>
      <div className="relative inline-flex self-center">
        <DownArrow className="text-white bg-pink-700 absolute top-0 right-0 m-2 pointer-events-none p-2 rounded" />        
        <select 
          id={props?.id}
          value={props.selectedValue} 
          onChange={props.onChange}
          className="text-l font-bold rounded border-2 border-pink-700 text-gray-600 h-10 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
          {items}      
        </select>
      </div>
    </div>
     
  );
});
      
export default SelectBox;
      
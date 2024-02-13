import {sideBarItems} from "@/utils/constants/sideBar";
import {ISideBarItem} from "@/utils/interface/misc";

const LeftSideBar = ()=>{  

  const items = sideBarItems?.map((item:ISideBarItem)=>{        
    return <h1 
      className="text-center text-l sm:text-l font-semibold mb-4 text-gray-800"  
      key={item.value} 
    >
      {item.text}
    </h1>; 
  });

  return(     
    <div className="flex flex-col items-start m-4 bg-white  rounded-lg shadow-xl p-6 w-1/6">       
      {items}
    </div>
  );
};
    
export default LeftSideBar;
    
import Search from "@/components/misc/svg/Search";
import Button from "@/components/misc/Button";
import Textbox from "@/components/misc/Textbox";
import {SearchAction} from "@/utils/enum/search";

interface IProps{   
  searchText:string
  dispatch:any
  searchClick:()=>void
}

const Header = ({searchText,dispatch,searchClick}:IProps) => {

  const borderRadiusStyle = {
    borderBottomLeftRadius: "50% 20%",
    borderBottomRightRadius: "50% 20%",
  };

  return(    
    <div className="overflow-hidden relative flex items-center min-h-32">  
      <div style={borderRadiusStyle} className="absolute bg-pink-700 w-full h-1/2 z-0 top-0"/>
      <div className="absolute inset-x-auto w-full z-10">
        <div className="w-2/3 mx-auto shadow-md rounded-md p-4 bg-white">           
          <form className="flex items-center"> 
            <div className="relative w-full">                
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <Search className={`"w-5 h-5 text-gray-500 dark:text-gray-400`}/>            
              </div>
              <Textbox
                id="search"                
                value={searchText}
                type="text"
                placeholder="Search ..."
                onChange={(e) => dispatch({type: SearchAction.SetSearchText,payload:e.target.value})} 
              />      
            </div>
            <Button
              id="search"
              type="button"             
              onClick={searchClick}
              text="Search"
            >
              <Search className={`mr-2 -ml-1 w-5 h-5`}/>
            </Button>                     
          </form>         
        </div>
      </div>
    </div>
  );
};

export default Header;
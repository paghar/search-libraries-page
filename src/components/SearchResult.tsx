import SelectBox from "./SelectBox";
import {sortItems} from "../utils/constants/selectBox";
import {SearchAction} from "@/utils/enum/search";

interface IProps{   
  searchItems:[],
  sort:string,
  dispatch:any, 
}


const SearchResult = (({searchItems,sort,dispatch}:IProps)=>{

  const items = searchItems?.map((item:any,index)=>{        
    return (
      <div key={index} className="mt-4 flex">
        <div>
          <div className="flex h-8 border-l-4 border-pink-600"/>               
          <div className="flex h-12 border-l-4 border-gray-400"/>   
        </div>
        <div>
          <div className="flex h-8">
            <span className="ml-2 text-lg text-pink-600 font-bold">{item.name}</span>
          </div>
          <div className="flex flex-col py-2 h-12">
            <span className="ml-2 text-gray-500">
              {item.description}
            </span>
            <span className="ml-2 text-gray-300">
              stars:{item.stars}, rank:{item.rank}, latest_release_published_at:{item.latest_release_published_at}
            </span>
          </div>
        </div>
      </div>
    );
    
  });

  
  return( 
    
    <div className="bg-white p-4 rounded-lg shadow-xl py-8 w-5/6 m-4">

      <div className="flex justify-between">
        <h6 className="text-l font-bold text-gray-800 tracking-widest uppercase">10 packages</h6>
        <SelectBox
          id="sort"         
          items={sortItems}
          selectedValue={sort}
          onChange={(e) => dispatch({type: SearchAction.SetSortType,payload:e.target.value})} 
        />      
      </div>
       
      <div className="space-y-12 px-2 xl:px-16 mt-12">{items}</div>

    </div>
  );
});
    
export default SearchResult;
    
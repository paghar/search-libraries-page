import SelectBox from "./misc/SelectBox";
import {sortItems} from "@/utils/constants/selectBox";
import {SearchAction} from "@/utils/enum/search";
import {InitialStateProps} from "@/utils/interface/search";

interface IProps{   
  searchInfos:InitialStateProps,  
  dispatch:any, 
}

const SearchResult = (({searchInfos,dispatch}:IProps)=>{

  const items = searchInfos?.searchItems?.map((item:any,index:number)=>{        
    return (
      <div key={index} className="mt-4 flex">
        <div>
          <div className="flex h-8 border-l-4 border-pink-600"/>               
          <div className="flex h-24 border-l-4 border-gray-400"/>   
        </div>
        <div>
          <div className="flex h-8">
            <span className="ml-2 text-pink-600 font-bold">{item.name}</span>
          </div>
          <div className="flex flex-col py-2 h-24">
            <span className="ml-2 text-gray-700 overflow-y-auto h:12">
              {item.description}
            </span>
            <span className="ml-2 text-gray-400">
              stars:{item.stars}, rank:{item.rank}, latest_release_published_at:{item.latest_release_published_at}
            </span>
          </div>
        </div>
      </div>
    );    
  });
  
  return(     
    <div className="2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-xs">
      <div className="flex justify-between flex-wrap">
        <div className=" font-bold text-gray-800 tracking-widest uppercase">{searchInfos?.totalSearchItem} packages</div>
        <SelectBox
          id="sort"         
          items={sortItems}
          selectedValue={searchInfos?.sort}
          onChange={(e) => dispatch({type: SearchAction.SetSortType,payload:e.target.value})} 
        />      
      </div>       
      <div className="space-y-12 px-2 mt-12">{items}</div> 
    </div>
  );
});
    
export default SearchResult;
    
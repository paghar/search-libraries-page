import {useEffect} from "react";
import SearchResult from "../components/SearchResult";
import {fetchData} from "@/hooks/useSearch";
import {useSearch, useSearchDispatch} from "@/context/searchInfo";
import {InitialStateProps} from "@/utils/interface/search";
import {sort} from "@/hooks/sort";
import Pagination from "@/components/misc/Pagination";
import LeftSideBar from "@/components/LeftSideBar";
import {SearchAction} from "@/utils/enum/search";


const Landing = (()=>{
  const dispatch = useSearchDispatch();  
  const searchInfos:InitialStateProps = useSearch();

  const perPage = 5;
  const total = searchInfos.totalSearchItem;

  useEffect(()=>{
    const key="f276c74b4b974df2432cede6284ff105";    
    fetchData(searchInfos.searchText,sort(searchInfos.sort),key,dispatch,searchInfos.pageNumber,perPage); 
  },[searchInfos.pageNumber,searchInfos.sort]);
 
  return(    
    <div className="flex justify-center bg-gray-100">    
      <div className="lg:w-4/5 md:w-full max-sm:w-full flex justify-center">
        <LeftSideBar/>
        <div className="bg-white p-4 rounded-lg shadow-xl py-8 w-5/6 m-4">
          <SearchResult searchInfos={searchInfos} dispatch={dispatch}/>         
          <div className="mt-8">
            <Pagination
              currentPage={searchInfos.pageNumber}
              perPage={perPage}
              totalCount={Number(total)}
              onClick={(currentPage) => dispatch({type: SearchAction.setPageNumber,payload:currentPage})}             
            />
          </div>
        </div>   
      </div>
    </div>  
  );
});
  
export default Landing;
  
import {useEffect} from "react";
import SearchResult from "../components/SearchResult";
import {fetchData} from "@/hooks/useSearch";
import {useSearch, useSearchDispatch} from "@/context/searchInfo";
import {InitialStateProps} from "@/utils/interface/search";
import {sort} from "@/hooks/sort";


const Landing = (()=>{
  const dispatch = useSearchDispatch();  
  const searchInfos:InitialStateProps = useSearch();

  useEffect(()=>{
    const key="f276c74b4b974df2432cede6284ff105";
    const searchText = "npm";   
    fetchData(searchText,sort(searchInfos.sort),key,dispatch); 
  },[]);

  
  useEffect(()=>{
    console.log(searchInfos);
  },[searchInfos]);
  
  
  return(    
    <div className="bg-gray-100  flex items-center justify-center p-3">
    
      <div className="w-4/5 flex ">

        <div className=" m-4 bg-white p-4 rounded-lg shadow-xl py-8 w-1/6">       
          <h1 className="text-center text-l sm:text-l font-semibold mb-4 text-gray-800">License</h1>         
          <h1 className="text-center text-l sm:text-l font-semibold mb-4 text-gray-800">Language</h1>     
          <h1 className="text-center text-l sm:text-l font-semibold mb-4 text-gray-800">Keyword</h1>
          <h1 className="text-center text-l sm:text-l font-semibold mb-4 text-gray-800">Platform</h1>
        </div>

        <SearchResult searchItems={searchInfos.searchItems} sort={searchInfos.sort} dispatch={dispatch}/>

      </div>

      

    </div>



  
  );
});
  
export default Landing;
  
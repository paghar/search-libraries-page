import Layout from "@/components/Layout/Layout";
import {useSearch, useSearchDispatch} from "@/context/searchInfo";
import {sort} from "@/hooks/sort";
import {fetchData} from "@/hooks/useSearch";
import {SearchAction} from "@/utils/enum/search";
import {InitialStateProps} from "@/utils/interface/search";
import {perPage} from "@/utils/constants/layout";

const LayoutContainer = ({children}: any) => {

  const searchInfos:InitialStateProps = useSearch();
  const dispatch = useSearchDispatch();  

  const searchClick = () => {    
    dispatch({type: SearchAction.setPageNumber,payload:1});  
    fetchData(searchInfos.searchText,sort(searchInfos.sort),dispatch,1,perPage); 
  };
  
  return (
    <Layout searchText={searchInfos.searchText} dispatch={dispatch} searchClick={searchClick} >
      {children}
    </Layout>
  );
};

export default LayoutContainer;

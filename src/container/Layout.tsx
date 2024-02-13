import Layout from "@/components/Layout/Layout";
import {useSearch, useSearchDispatch} from "@/context/searchInfo";
import {sort} from "@/hooks/sort";
import {fetchData} from "@/hooks/useSearch";
import {SearchAction} from "@/utils/enum/search";
import {InitialStateProps} from "@/utils/interface/search";

const LayoutContainer = ({children}: any) => {

  const searchInfos:InitialStateProps = useSearch();
  const dispatch = useSearchDispatch();  

  const perPage = 5;
 
  const searchClick = () => {
    const key="f276c74b4b974df2432cede6284ff105"; 
    dispatch({type: SearchAction.setPageNumber,payload:1});  
    fetchData(searchInfos.searchText,sort(searchInfos.sort),key,dispatch,1,perPage); 
  };
  
  return (
    <Layout searchText={searchInfos.searchText} dispatch={dispatch} searchClick={searchClick} >
      {children}
    </Layout>
  );
};

export default LayoutContainer;

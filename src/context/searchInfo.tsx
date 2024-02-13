import {createContext, useContext, useReducer} from "react";
import {SearchAction} from "@/utils/enum/search";
import {InitialStateProps} from "@/utils/interface/search";

const SearchContext = createContext<InitialStateProps>({
  searchText:"bower",
  sort:"1",  
  searchItems:[], 
  totalSearchItem:"0", 
  pageNumber: 1
});

const SearchDispatchContext = createContext(undefined as any);

export function useSearch() {
  return useContext(SearchContext);
}

export function useSearchDispatch() {
  return useContext(SearchDispatchContext);
}

export const initialSearch:InitialStateProps = {
  searchText:"bower",
  sort:"1",   
  searchItems:[],
  totalSearchItem:"0",
  pageNumber: 1  
};

export const searchReducer = (search = initialSearch, action:any) => {
  switch (action.type) {     

    case SearchAction.SetSearchText: 
      return {
        ...search,
        searchText: action.payload
      }; 

    case SearchAction.SetSortType: 
      return {
        ...search,
        sort: action.payload
      }; 

    case SearchAction.SetSearchItems: 
      return {
        ...search,
        searchItems: action.payload
      }; 
    
    case SearchAction.setTotalSearchItem: 
      return {
        ...search,
        totalSearchItem: action.payload
      }; 

    case SearchAction.setPageNumber: 
      return {
        ...search,
        pageNumber: action.payload
      }; 

    default: return search;
  }
};

type Props = {
  children: string | JSX.Element | JSX.Element[],
}

export function SearchProvider({children}:Props) {
  const [searchInfos, dispatch] = useReducer(
    searchReducer,
    initialSearch
  );
  
  return (
    <SearchContext.Provider value={searchInfos}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}
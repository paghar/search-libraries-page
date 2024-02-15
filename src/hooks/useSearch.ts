import {SearchAction} from "@/utils/enum/search";
import axios from "axios";

export const fetchData = (
  searchText:string,
  sort:string, 
  dispatch:any,
  page:number,
  perPage:number
)=>{ 

  const key ="f276c74b4b974df2432cede6284ff105";
    
  axios
    .get(`https://libraries.io/api/search?q=${searchText}&sort=${sort}&api_key=${key}&page=${page}&per_page=${perPage}`)
    .then(response => {         
      dispatch({
        type: SearchAction.SetSearchItems,
        payload: response?.data,
      });

      dispatch({
        type: SearchAction.setTotalSearchItem,
        payload: response.headers.total,
      });
    })
    .catch(error => {     
      // eslint-disable-next-line no-console
      console.log(error);
    });    
};  
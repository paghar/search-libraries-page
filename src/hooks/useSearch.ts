import {SearchAction} from "@/utils/enum/search";
import axios from "axios";

export const fetchData = (
  searchText:string,
  sort:string,
  key:string,
  dispatch:any,
  page:number,
  perPage:number
)=>{ 
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
      console.log(error);
    });    
};  
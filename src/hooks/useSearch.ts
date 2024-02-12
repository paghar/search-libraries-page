import {SearchAction} from "@/utils/enum/search";
import axios from "axios";

export const fetchData = (searchText:string,sort:string,key:string,dispatch:any)=>{ 
  axios
    .get(`https://libraries.io/api/search?q=${searchText}&sort=${sort}&api_key=${key}`)
    .then(response => {   
      dispatch({
        type: SearchAction.SetSearchItems,
        payload: response?.data,
      });
    })
    .catch(error => {     
      console.log(error);
    });    
};  
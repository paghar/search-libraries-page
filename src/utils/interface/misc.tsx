export interface ISelectBoxItem {
  value:number,
  text:string,
}

export interface ISelectBox {    
  id?: string,  
  items:ISelectBoxItem[], 
  selectedValue?:string | number,  
  onChange?:(e:any) => void,   
}

export interface IFooterItem {
  value:number,
  text:string,
}

export interface ISideBarItem {
  value:number,
  text:string,
}
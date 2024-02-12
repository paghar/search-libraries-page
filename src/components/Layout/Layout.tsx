import Footer from "./Footer";
import Header from "./Header";

interface IProps{ 
  children:any 
  searchText:string
  dispatch:any
  searchClick:()=>void
}

const Layout = ({searchText,children,dispatch,searchClick}: IProps) => {
  return (
    <>
      <Header searchText={searchText} dispatch={dispatch} searchClick={searchClick}/>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
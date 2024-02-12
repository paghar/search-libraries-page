
interface IProps{ 
  className:string
}
  
const DownArrow = ({className}: IProps) => {
  return(
    <svg className={className} xmlns="http://www.w3.org/2000/svg"  width="25px" height="25px" viewBox="0 0 38 22" version="1.1">      
      <g id="ZahnhelferDE—Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="ZahnhelferDE–Icon&amp;Asset-Download" transform="translate(-539.000000, -199.000000)" fill="#ffffff" fillRule="nonzero">
          <g id="Icon-/-ArrowRight-Copy-2" transform="translate(538.000000, 183.521208)">
            <polygon 
              id="Path-Copy" 
              transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) " 
              points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"/>
          </g>
        </g>
      </g>
    </svg>
  );
};
  
  
export default DownArrow;
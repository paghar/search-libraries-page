import {useMemo} from "react";
import RightArrow from "./svg/RightArrow";
import LeftArrow from "./svg/LeftArrow";

const DOTS = "...";

type Props = {
  currentPage: number;
  totalCount: number;
  perPage: number;
  onClick: (currenPage: number) => void;
};
const Pagination: React.FC<Props> = ({currentPage, totalCount, perPage, onClick}) => {
  const totalPageCount = Math.ceil(totalCount / perPage);

  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({length}, (_, idx) => idx + start);
  };

  const paginationRange = useMemo(() => {
    const siblingCount = 1;

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, perPage, currentPage]);

  const onNext = () => {
    if (currentPage === totalPageCount) return;
    onClick(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) return;
    onClick(currentPage - 1);
  };

  if (currentPage === 0 || totalPageCount < 2 || !paginationRange) {
    return null;
  }
  return (
    <ul className="flex justify-center items-center gap-2">
      {/* Left navigation arrow */}
      <li 
        role="prevButton"     
        className={`p-3 border rounded-md hover:bg-black-600 group transition-all cursor-pointer ${
          currentPage === 1 && "border-pink-400 [&>svg]:fill-pink-400"
        }`}
        onClick={onPrevious}
      >
        <LeftArrow className="group-hover:fill-gray-500"/>
       
      </li>
      {paginationRange?.map((pageNumber,index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li key={`item-number${index}`} className=" dots">
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li            
            key={pageNumber}
            className={`text-lg px-4 py-2 border rounded-md hover:bg-black-600 hover:text-gray-500 transition-all cursor-pointer ${
              pageNumber === currentPage && "text-gray-500 bg-pink-600"
            }`}
            onClick={() => onClick(+pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li    
        role="nextButton"      
        className={`p-3  border rounded-md hover:bg-black-600 group transition-all cursor-pointer ${
          currentPage === totalPageCount && "border-pink-400 [&>svg]:fill-pink-400"
        }`}
        onClick={onNext}
      >
        <RightArrow  className=" group-hover:fill-white-500"/>      
      </li>
    </ul>
  );
};

export default Pagination;

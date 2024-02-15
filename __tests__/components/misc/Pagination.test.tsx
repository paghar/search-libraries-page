import React from "react";
import {render, fireEvent} from "@testing-library/react";
import Pagination from "../../../src/components/misc/Pagination";

const currentPage = 3;
const totalCount = 50;
const perPage = 10;
const onClick = jest.fn();

describe("Pagination Component", () => {

  const {container} = render(
    <Pagination currentPage={currentPage} totalCount={totalCount} perPage={perPage} onClick={onClick} />
  );

  it("Renders Snapshot Buttons", () => {    
    expect(container).toMatchSnapshot();
  });

});

describe("Pagination Component", () => {
  test("renders correct page numbers and handles navigation clicks", () => {   

    const {getByText, getByRole} = render(
      <Pagination currentPage={currentPage} totalCount={totalCount} perPage={perPage} onClick={onClick} />
    );

    // Check if page numbers and arrows are rendered
    const pageNumbers = [1,2, 3, 4, 5];
    pageNumbers.forEach(page => {      
      expect(getByText(page.toString())).toBeInTheDocument();   
    });

    // Find buttons for navigation
    const prevButton = getByRole("prevButton");
    // Simulate a click on the previous arrow
    fireEvent.click(prevButton);
    expect(onClick).toHaveBeenCalledWith(currentPage - 1);

    // Find buttons for navigation
    const nextButton = getByRole("nextButton");
    // Simulate a click on the next arrow
    fireEvent.click(nextButton);
    expect(onClick).toHaveBeenCalledWith(currentPage + 1);

  });
});
import React from "react";
import {render, fireEvent} from "@testing-library/react";
import Header from "../../../src/components/Layout/Header";

const searchText = "Test search";
const dispatch = jest.fn();
const searchClick = jest.fn();

describe("Header Component", () => {
  
  const {container} = render(
    <Header searchText={searchText} dispatch={dispatch} searchClick={searchClick} />
  );
  
  it("Renders Snapshot Header", () => {    
    expect(container).toMatchSnapshot();
  });
  
});

describe("Header Component", () => {
  test("renders header with search input and button", () => {
        
    const {getByPlaceholderText, getByText} = render(
      <Header searchText={searchText} dispatch={dispatch} searchClick={searchClick} />
    );

    const searchInput = getByPlaceholderText("Search ...");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue(searchText);

    const searchButton = getByText("Search");
    expect(searchButton).toBeInTheDocument();
    fireEvent.click(searchButton);
    expect(searchClick).toHaveBeenCalled();
  });
});
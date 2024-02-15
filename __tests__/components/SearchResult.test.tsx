import React from "react";
import {render} from "@testing-library/react";
import SearchResult from "../../src/components/SearchResult";

const searchInfos = {
  searchText:"npm",
  sort: "stars",     
  searchItems: [
    {name: "Item 1", description: "Description 1", stars: 10, rank: 1, latest_release_published_at: "2022-01-01"},
    {name: "Item 2", description: "Description 2", stars: 20, rank: 2, latest_release_published_at: "2022-01-02"},
    {name: "Item 3", description: "Description 3", stars: 30, rank: 3, latest_release_published_at: "2022-01-03"}
  ],
  totalSearchItem: "3",
  pageNumber:2
    
};
const dispatch = jest.fn();

describe("Button Component", () => {
  const {container} = render(
    <SearchResult searchInfos={searchInfos} dispatch={dispatch} />
  );   
  it("Renders Snapshot Buttons", () => {    
    expect(container).toMatchSnapshot();
  });
    
});

describe("SearchResult Component", () => {
  test("renders search items and handles sorting selection", () => {  

    const {getByText} = render(
      <SearchResult searchInfos={searchInfos} dispatch={dispatch} />
    );

    // Check if search items are rendered correctly
    searchInfos.searchItems.forEach(item => {
      expect(getByText(item.name)).toBeInTheDocument();
      expect(getByText(item.description)).toBeInTheDocument();
    });

    // Check if total search items are displayed
    expect(getByText(`${searchInfos.totalSearchItem} packages`)).toBeInTheDocument();

  });
});

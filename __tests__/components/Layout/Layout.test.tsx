import React from "react";
import {render} from "@testing-library/react";
import Layout from "../../../src/components/Layout/Layout";

const searchText = "Test search";
const dispatch = jest.fn();
const searchClick = jest.fn();
  
describe("Layout Component", () => {

  const {container} = render(   
    <Layout searchText={searchText} dispatch={dispatch} searchClick={searchClick}>
      <div>Test children</div>
    </Layout>
  );
  
  it("Renders Snapshot Layout", () => {    
    expect(container).toMatchSnapshot();
  });
  
});

describe("Layout Component", () => {
  test("renders children, Header, and Footer components with provided props", () => {
    
    const {getByText} = render(
      <Layout searchText={searchText} dispatch={dispatch} searchClick={searchClick}>
        <div>Test children</div>
      </Layout>
    );
    
    // Ensure children are rendered
    const testChild = getByText("Test children");
    expect(testChild).toBeInTheDocument();
  });
});

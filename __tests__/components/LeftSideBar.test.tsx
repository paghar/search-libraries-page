import React from "react";
import {render} from "@testing-library/react";
import LeftSideBar from "../../src/components/LeftSideBar";
import {sideBarItems} from "../../src/utils/constants/sideBar";

describe("Button Component", () => {

  const {container} = render(<LeftSideBar />);
  
  it("Renders Snapshot Buttons", () => {    
    expect(container).toMatchSnapshot();
  });
  
});

describe("LeftSideBar Component", () => {
  test("renders sidebar items correctly", () => {
    const {getByText} = render(<LeftSideBar />);

    sideBarItems.forEach(item => {
      const sidebarItem = getByText(item.text);
      expect(sidebarItem).toBeInTheDocument();
    });
  });
});
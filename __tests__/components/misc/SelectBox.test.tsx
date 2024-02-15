import React from "react";
import {render, fireEvent} from "@testing-library/react";
import SelectBox from "../../../src/components/misc/SelectBox";

const items = [
  {value: 1, text: "Option 1"},
  {value: 2, text: "Option 2"},
  {value: 3, text: "Option 3"},
];
const selectedValue = "2";
const onChange = jest.fn();

describe("Button Component", () => {
  const {container} = render(
    <SelectBox id="test-select" items={items} selectedValue={selectedValue} onChange={onChange} />
  );
  
  it("Renders Snapshot Buttons", () => {    
    expect(container).toMatchSnapshot();
  });
  
});

describe("SelectBox Component", () => {
  test("renders select box with provided items and handles selection change", () => {
    const {getByDisplayValue, getByText} = render(
      <SelectBox id="test-select" items={items} selectedValue={selectedValue} onChange={onChange} />
    );

    const selectBox = getByDisplayValue("Option 2"); // Ensure select box renders with the correct selected value
    expect(selectBox).toBeInTheDocument();

    // Ensure options are rendered
    items.forEach(item => {
      const option = getByText(item.text);
      expect(option).toBeInTheDocument();
    });

    // Simulate a selection change
    fireEvent.change(selectBox, {target: {value: "3"}});
    expect(onChange).toHaveBeenCalled();
  });
});

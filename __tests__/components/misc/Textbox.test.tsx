import React from "react";
import {render, fireEvent} from "@testing-library/react";
import Textbox from "../../../src/components/misc/Textbox";

const placeholder = "Enter text";
const onChange = jest.fn();

describe("Button Component", () => {  
  const {container} = render(
    <Textbox
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
  it("Renders Snapshot Buttons", () => {    
    expect(container).toMatchSnapshot();
  });
});

describe("Textbox Component", () => {
  test("renders textbox with provided props", () => {    
    const {getByPlaceholderText} = render(
      <Textbox
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    );
    const textbox = getByPlaceholderText(placeholder);
    expect(textbox).toBeInTheDocument();
    expect(textbox).toHaveAttribute("type", "text");
    fireEvent.change(textbox, {target: {value: "Test input"}});
    expect(onChange).toHaveBeenCalled();
  }); 
});
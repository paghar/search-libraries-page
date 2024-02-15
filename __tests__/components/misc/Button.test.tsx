import {render, fireEvent} from "@testing-library/react";
import Button from "../../../src/components/misc/Button";
import Search from "../../../src//components/misc/svg/Search";
 
describe("Button Component", () => {

  const {container} = render(
    <Button
      id="search"
      type="button"             
      onClick={()=>jest.fn()}
      text="Search"
    >
      <Search className={`mr-2 -ml-1 w-5 h-5`}/>
    </Button> 
  );

  it("Renders Snapshot Buttons", () => {    
    expect(container).toMatchSnapshot();
  });

});

describe("Button Component", () => {
  // Test rendering with required props
  test("renders button with text correctly", () => {
    const onClickMock = jest.fn();
    const {getByText} = render(
      <Button onClick={onClickMock} text="Click me" type="button" />
    );
    const buttonElement = getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  // Test clicking the button
  test("calls onClick prop when button is clicked", () => {
    const onClickMock = jest.fn();
    const {getByText} = render(
      <Button onClick={onClickMock} text="Click me" type="button" />
    );
    const buttonElement = getByText("Click me");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  // Test optional props
  test("renders button with optional id and className props", () => {
    const onClickMock = jest.fn();
    const {getByText} = render(
      <Button
        onClick={onClickMock}
        text="Click me"
        type="button"
        id="testId"
        className="`mr-2 -ml-1 w-5 h-5`"
      />
    );
    const buttonElement = getByText("Click me");
    expect(buttonElement).toHaveAttribute("id", "testId");
    expect(buttonElement).toHaveClass("inline-flex items-center");
  });

  // Test rendering with children
  test("renders button with children correctly", () => {
    const onClickMock = jest.fn();
    const {getByText} = render(
      <Button onClick={onClickMock} type="button">
        <span>Icon</span>
        <span>Click me</span>
      </Button>
    );
    expect(getByText("Icon")).toBeInTheDocument();
    expect(getByText("Click me")).toBeInTheDocument();
  });
});
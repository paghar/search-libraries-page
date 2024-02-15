import React from "react";
import {render} from "@testing-library/react";
import Footer from "../../../src/components/Layout/Footer";
import {footerItems} from "../../../src/utils/constants/footer";

describe("Footer Component", () => {
  const {container} = render(<Footer/>);
  it("Renders Snapshot Footer", () => {    
    expect(container).toMatchSnapshot();
  });
});


describe("Footer Component", () => {
  test("renders footer with correct social media icons", () => {
    const {getByTestId} = render(<Footer />);
    
    const facebookIcon = getByTestId("facebook-icon");
    const twitterIcon = getByTestId("twitter-icon");
    const instagramIcon = getByTestId("instagram-icon");
    const linkedinIcon = getByTestId("linkedin-icon");
    const githubIcon = getByTestId("github-icon");

    expect(facebookIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
  });

  test("renders navigation items correctly", () => {
    const {getByText} = render(<Footer />);
    footerItems.forEach(item => {
      const textElement = getByText(item.text);
      expect(textElement).toBeInTheDocument();
    });
  });
  
});
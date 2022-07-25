import { render, screen } from "@testing-library/react";
import ImageSlider from ".";

// Personal Images
import { personalImages } from "jsonDB";
import { Component } from "react";

const imgLen = personalImages.length;

// Need to change component so component gets passed:
// "images" (image array),
// "currentImg" (number),
// and "setCurrentImg" (React SetState func)
// to ImageSliderComponent. Then you can test for functionality of component.
// ImageSlider already has proper Props type setup.
// Just need to put image array and state data in About Page.
// And change out variable names in ImageSlider Component.

// describe("ImageSlider Component", () => {
//   for (let i = 0; i < imgLen; i++) {
//     it(`can render slide ${
//       i + 1
//     } of ${imgLen} of personal images slides`, () => {
//       render(<ImageSlider />);
//       const slide = screen.getByTestId("personalImg-testId");
//       expect(slide).toBeInTheDocument();
//     });
//   }
// });

// DUMMY TEST TO DELETE LATER
describe("dummy test", () => {
  it("is true", () => {
    expect(1 === 1);
  });
});

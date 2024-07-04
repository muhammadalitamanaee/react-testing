import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("the image Gallery Product component", () => {
  it("should render null when the array of imageUrl is empty", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    expect(container).toBeEmptyDOMElement();
  });
  it("should render two image when the array of imageUrl is NOT empty", () => {
    const ImageSourceArray = ["one", "two"];
    render(<ProductImageGallery imageUrls={ImageSourceArray} />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    ImageSourceArray.map((item, index) => {
      expect(images.at(index)).toBeInTheDocument();
      expect(images.at(index)).toHaveAttribute("src", item);
    });
  });
});

import { render, screen } from "@testing-library/react";
import ProductDetailPage from "../../src/pages/ProductDetailPage";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("image renderer test", () => {
  it("that when the arr is empty it renders nothing ", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
  it("that when the arr is full it renders the e ", () => {
    const imageUrls = ["test1", "test2", "test3"];
     render(<ProductImageGallery imageUrls={imageUrls} />);
    const allImages = screen.getAllByRole("img");
    expect(allImages).toHaveLength(3);
    imageUrls.map((item, index) => {
      expect(allImages.at(index)).toHaveAttribute("src", item);
    });
  });
});

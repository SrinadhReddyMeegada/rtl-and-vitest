import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("Images need to rendered", () => {
  it("should not be rendred if images array is empty", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should be render images when imageUrl is present", () => {
    const imageUrls = ["url1", "url2", "url3"];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    const image = screen.getAllByRole("img");
    expect(image).toHaveLength(imageUrls.length);
    imageUrls.forEach((url, index) => {
      expect(image[index]).toHaveAttribute("src", url);
    });
  });
});

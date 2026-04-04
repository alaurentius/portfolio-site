import { render, screen } from "@testing-library/react";
import Navbar from "@/components/layout/Navbar";

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

const sections = ["about", "experience", "projects", "skills", "contact"] as const;

describe("Navbar", () => {
  it("renders the navbar element", () => {
    render(<Navbar />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it.each(sections)("renders nav link for '%s' with correct href", (section) => {
    render(<Navbar />);
    const links = screen.getAllByTestId(`nav-link-${section}`);
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", `#${section}`);
    });
  });
});

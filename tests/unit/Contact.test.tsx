import { render, screen } from "@testing-library/react";
import Contact from "@/components/sections/Contact";

// Mock next-intl
jest.mock("next-intl", () => ({
  useTranslations: (ns: string) => (key: string) => `${ns}.${key}`,
}));

// Mock @formspree/react
const mockHandleSubmit = jest.fn();
let mockState = { succeeded: false, submitting: false, errors: [] };

jest.mock("@formspree/react", () => ({
  useForm: () => [mockState, mockHandleSubmit],
  ValidationError: () => null,
}));

describe("Contact", () => {
  beforeEach(() => {
    mockState = { succeeded: false, submitting: false, errors: [] };
  });

  it("renders the contact form", () => {
    render(<Contact />);
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });

  it("renders name, email, and message fields", () => {
    render(<Contact />);
    expect(screen.getByTestId("input-name")).toBeInTheDocument();
    expect(screen.getByTestId("input-email")).toBeInTheDocument();
    expect(screen.getByTestId("textarea-message")).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<Contact />);
    expect(screen.getByTestId("button-submit")).toBeInTheDocument();
  });

  it("submit button is disabled while submitting", () => {
    mockState = { succeeded: false, submitting: true, errors: [] };
    render(<Contact />);
    expect(screen.getByTestId("button-submit")).toBeDisabled();
  });

  it("shows success message after submission", () => {
    mockState = { succeeded: true, submitting: false, errors: [] };
    render(<Contact />);
    expect(screen.getByTestId("message-success")).toBeInTheDocument();
    expect(screen.queryByTestId("contact-form")).not.toBeInTheDocument();
  });
});

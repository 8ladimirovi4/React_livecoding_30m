import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Main from "./Main";
import { ThemeProvider } from "../../context/ThemeContext";

describe("CommonButton Theme Toggle", () => {
  test("должна менять название при переключении темы", async () => {
    render(
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    );

    const button = await screen.findByTestId("toogle-theme"); // ждём появления элемента

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Темная тема");

    fireEvent.click(button);

    expect(button).toHaveTextContent("Светлая тема");
  });
});

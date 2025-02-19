import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../context/ThemeContext";
import Toolbar from "./Toolbar";

describe("Toolbar component", () => {
  test("рендерится без ошибок", async () => {
    const mockSetSearch = vi.fn();
    const mockSetSortField = vi.fn();
    const mockSetPerPage = vi.fn();

    render(
      <ThemeProvider>
        <Toolbar
          search=""
          setSearch={mockSetSearch}
          setSortField={mockSetSortField}
          setPerPage={mockSetPerPage}
        />
      </ThemeProvider>
    );

    const input = screen.getByTestId("input-filter");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });
});

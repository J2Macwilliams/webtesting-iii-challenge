// Test awayimport React from 'react';
import React from 'react';
import { render, getByTestId } from 'react-testing-library';

import Dashboard from './Dashboard';



describe("Dashboard" , () => {
const { getByTestId } = render(<Dashboard />);

  it("renders the display", () => {
    const { getByTestId } = render(<Dashboard />);
    const displayOutput = getByTestId("displayElement");
    expect(displayOutput.textContent).toBe("UnlockedOpen");
  })

  it ("shows the conttrols", () => {
    const { getByTestId } = render(<Dashboard />);
    const controlBtns = getByTestId("controls");
    expect(controlBtns.textContent).toBe("Lock GateClose Gate")
  })
})
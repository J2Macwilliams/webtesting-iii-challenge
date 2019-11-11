
import React from 'react';
import { render } from 'react-testing-library';

import Controls from './Controls';

test ('cannot be closed or opened if it is locked', () => {
const disabledMock = jest.fn();

const { getByText } = render(
  <Controls disabled={disabledMock} />
);


})
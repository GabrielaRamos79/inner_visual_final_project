import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

global.render = (ui, options) =>
  render(ui, { wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,...options });

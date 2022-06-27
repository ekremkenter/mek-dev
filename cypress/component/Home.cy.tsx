import { mount } from 'cypress/react';

import HomePage from '@/pages';

describe('Home.cy.ts', () => {
  it('playground', () => {
    mount(<HomePage />);
  });
});

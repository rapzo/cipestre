import { testDashboardTitleVisible } from '../support/dashboard.po';

describe('Dashboard', () => {
  beforeEach(() => cy.visit('/'));

  it('Should be logged in and dashboard visible', () => {
    cy.login('demo', 'demo');

    testDashboardTitleVisible();
  });
});

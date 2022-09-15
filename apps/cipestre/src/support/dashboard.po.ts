export const testDashboardTitleVisible = () =>
  cy.get('h2').contains('Welcome to the react-admin e-commerce demo');

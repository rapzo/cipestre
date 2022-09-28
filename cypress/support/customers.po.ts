export const customerTab = () =>
  cy.get(':nth-child(4) > .MuiMenuItem-root > .MuiTypography-root');

export const customerPage = () => cy.get('[href="#/customers"]');

export const customerÑame = () =>
  cy.get(
    ':nth-child(1) > .column-customer_id > .MuiTypography-inherit > .MuiTypography-root'
  );

export const customerInfoPage = () =>
  cy.get('.MuiTableBody-root > :nth-child(1) > .column-customer_id');

export const customerInfoPageName = () =>
  cy.get('#react-admin-title > .MuiTypography-root');

export const dashboard = () => cy.get('[href="#/"]');

export const pageReviews = () => cy.get('[href="#/reviews"]');

export const statusReview = () =>
  cy.get(':nth-child(1) > .column-status > .MuiTypography-root'); // checks status

export const addFilter = () => cy.get('.css-1baulvz > .MuiButton-root');

export const searchBar = () => cy.get('#q');

export const firstCostumer = () =>
  cy.get(':nth-child(1) > .column-customer_id > .MuiTypography-root');

export const firstCostumerName = () =>
  cy.get(
    ':nth-child(1) > .css-1rzxred > .css-4a8j24 > .MuiTypography-inherit > .MuiTypography-root'
  );

export const acceptStatus = () =>
  cy.get('form > .MuiToolbar-root > :nth-child(1)');

export const clearStatus = () => cy.get('[data-testid="ClearIcon"]');

export const customerFilter = () => cy.get('[data-key="customer_id"]');

export const customerBar = () => cy.get('#customer_id');

//

export const customerDropDown = () =>
  cy.get('.MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]');

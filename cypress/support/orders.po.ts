export let informationOrderPage = [];
export let informationCancelPage = [];

export const getOrderPage = () => cy.get('.MuiList-root > [href="#/commands"]');

export const firstOrder = () =>
  cy.get(':nth-child(1) > .column-reference > .MuiTypography-root');

export const statusOrder = () => cy.get('#status');

export const deliveryOrder = () => cy.get('[data-value="delivered"]');

export const cancelOrder = () => cy.get('[data-value="cancelled"]');

export const saveDeliveryStatus = () =>
  cy.get('.RaToolbar-defaultToolbar > .MuiButton-contained');

export const getFirstTotal = () =>
  cy.get(':nth-child(1) > .column-total > .MuiTypography-root');

export const totalSumOrder = () =>
  cy.get(
    ':nth-child(7) > .MuiTable-root > .MuiTableBody-root > :nth-child(1) > .css-zegsmg'
  );

export const totalPrice = () =>
  Cypress.Promise.all<string>([
    cy.get(':nth-child(1) > .css-zegsmg').invoke('text'), // 1st value  // sum
    cy.get(':nth-child(2) > .css-zegsmg').invoke('text'), // 2nd value  // deliveryOrder
    cy.get(':nth-child(3) > .css-zegsmg').invoke('text'), //3rd value   // tax
    cy.get('.css-aczn5w').invoke('text'), //4rd total   // total
  ]).then(([sum, deliveryOrder, tax, total]) => {
    cy.log(`${sum}, ${deliveryOrder}, ${tax}, ${total}`);

    sum = sum.replace('$', '');
    deliveryOrder = deliveryOrder.replace('$', '');
    tax = tax.replace('$', '');
    total = total.replace('$', '');

    const allTotal = Number(sum) + Number(deliveryOrder) + Number(tax);

    expect(allTotal.toFixed(2)).to.equal(Number(total).toFixed(2));
  });

export const totalOrder = () => cy.get('.css-aczn5w');

export const cancellOrderTab = () =>
  cy.get('.MuiTabs-flexContainer > :nth-child(3)');

/////////////////////////////////////// order page

export let infoOrderDate = () =>
  cy
    .get(':nth-child(1) > .column-date > .MuiTypography-root')
    .invoke('text')
    .then((text) => {
      informationOrderPage.push(text);
    });

export let infoOrderReference = () =>
  cy
    .get(':nth-child(1) > .column-reference > .MuiTypography-root')
    .invoke('text')
    .then((text) => {
      informationOrderPage.push(text);
    });

export let infoOrderName = () =>
  cy
    .get(
      ':nth-child(1) > :nth-child(4) > .css-4a8j24 > .MuiTypography-inherit > .MuiTypography-root'
    )
    .invoke('text')
    .then((text) => {
      informationOrderPage.push(text);
    });

export let infoOrderTotal = () =>
  cy
    .get(':nth-child(1) > .column-total > .MuiTypography-root')
    .invoke('text')
    .then((text) => {
      informationOrderPage.push(text);
    });

/////////////////////////////////////// Cancel page

export let infoCancelDate = () =>
  cy
    .get(':nth-child(1) > .column-date > .MuiTypography-root')
    .invoke('text')
    .then((text) => {
      informationCancelPage.push(text);
    });

export let infoCancelReference = () =>
  cy
    .get(':nth-child(1) > .column-reference > .MuiTypography-root')
    .invoke('text')
    .then((text) => {
      informationCancelPage.push(text);
    });

export let infoCancelName = () =>
  cy
    .get(
      ':nth-child(1) > :nth-child(4) > .css-4a8j24 > .MuiTypography-inherit > .MuiTypography-root'
    )
    .invoke('text')
    .then((text) => {
      informationCancelPage.push(text);
    });

export let infoCancelTotal = () =>
  cy
    .get(':nth-child(1) > .column-total > .MuiTypography-root')
    .invoke('text')
    .then((text) => {
      informationCancelPage.push(text);
    });

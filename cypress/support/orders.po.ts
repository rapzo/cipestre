export const getOrderPage = () => cy.get('.MuiList-root > [href="#/commands"]');

export const firstOrder = () =>
  cy.get(':nth-child(1) > .column-reference > .MuiTypography-root');

export const statusOrder = () => cy.get('#status');

export const deliveryOrder = () => cy.get('[data-value="delivered"]');

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

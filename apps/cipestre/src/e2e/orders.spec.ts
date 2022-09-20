import {
  getOrderPage,
  firstOrder,
  statusOrder,
  deliveryOrder,
  saveDeliveryStatus,
  totalSumOrder,
  totalPrice,
  //totalTaxPrice,
  totalOrder,
  //getFirstTotal,
} from '../support/orders.po';

describe('OrderPage', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login('demo', 'demo');
  });

  it('should check orders and verify order delivery status', () => {
    getOrderPage().click();

    firstOrder().click();

    //totalTaxPrice();

    totalPrice(); // check total = sum order + tax + delivery

    statusOrder().click();

    deliveryOrder().click();

    saveDeliveryStatus().click();
  });
});

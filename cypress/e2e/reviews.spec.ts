import * as cypress from 'cypress';
import { cli } from 'cypress';
import {
  pageReviews,
  statusReview,
  searchBar,
  addFilter,
  firstCostumer,
  firstCostumerName,
  acceptStatus,
  clearStatus,
  customerFilter,
  customerBar,
  customerDropDown,
} from '../support/reviews.po';

describe('OrderPage', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login('demo', 'demo');
  });

  it('should check pending and modify it /Confirm order delivery status', () => {
    pageReviews().click();

    let customerName: string;

    searchBar() // go to search bar and search for pending orders
      .type('pending')
      .then(() => {
        firstCostumer().click(); // open profile of first customer

        firstCostumerName() // get customer name
          .invoke('text')
          .then((text) => {
            cy.wrap(text).as('nameCliente');
          });
      });

    cy.get('@nameCliente').then((text) => {
      // grava nome do primeiro customer
      customerName = String(text);
      //cy.log(customerName);
    });

    acceptStatus().click(); // modify pending status to confirm order delivery status

    clearStatus().click();

    searchBar().type('accepted');

    addFilter().click();

    customerFilter().click({ force: true });

    addFilter().click();

    customerFilter()
      .click({ force: true })
      .then(() => {
        cy.log(customerName).then(() => {
          customerBar().type(customerName);
        });
      });
  });
});

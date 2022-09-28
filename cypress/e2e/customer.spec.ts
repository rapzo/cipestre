import * as cypress from 'cypress';
import { cli } from 'cypress';
import {
  customerTab,
  customerPage,
  customerÑame,
  customerInfoPage,
  customerInfoPageName,
} from '../support/customers.po';

describe('OrderPage', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login('demo', 'demo');
  });

  it('should check pending and modify it /Confirm order delivery status', () => {
    let customerName: string;
    let customerPageName: string;

    customerTab().click();
    customerPage().click();

    customerÑame()
      .invoke('text')
      .then((text) => {
        cy.wrap(text).as('customerName');
        //cy.log(text);
      });

    cy.get('@customerName').then((text) => {
      // grava nome do primeiro customer
      customerName = String(text);
      //cy.log(customerName);
    });

    customerInfoPage().click();

    customerInfoPageName()
      .invoke('text')
      .then((text) => {
        cy.wrap(text).as('customerPageName');
        //cy.log(text);

        cy.get('@customerPageName').then((text) => {
          // grava nome do primeiro customer
          customerPageName = String(text);
          //cy.log(customerName);
          expect(customerName).equal(customerPageName);
        });
      });
  });
});

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
  cancelOrder,
  cancellOrderTab,
  //getFirstTotal,
  infoOrderDate,
  infoOrderReference,
  infoOrderName,
  infoOrderTotal,
  informationOrderPage,
  informationCancelPage,
  infoCancelDate,
  infoCancelReference,
  infoCancelName,
  infoCancelTotal,
} from '../support/orders.po';

describe('OrderPage', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login('demo', 'demo');
  });

  it('should check if the sum of costs = Total /  Modify order to delivered status and save it', function () {
    getOrderPage().click();

    firstOrder().click();

    //totalTaxPrice();

    totalPrice(); // check total = sum order + tax + delivery

    statusOrder().click();

    deliveryOrder().click();

    saveDeliveryStatus().click();
  });

  let orderDate;
  let orderReference;
  let orderName;
  let orderTotal;
  let infoArray = [];
  it.only('Cancel order and check if website updates status and keeps all the information', () => {
    /*
      task:
      Cancelar order e verificar se foi realmente cancelada, 
      ordenar order por cancelada para verificar filtros de ordem,
      comparar Data, Referencia, Nome de Cliente, Morada, Nrº de items e Total do valor para verificar se bate certo com o que foi cancelado. 
      Entrar na order cancelada e verificar se os artigos são os mesmos.
    
      how to do:
      ir a pagina de orders, abrir primeiro order, guardar os dados :  Data, Referencia, Nome de Cliente, Morada, Nrº de items e Total do valor
    */

    // go to order, save info and modify status to cancell

    getOrderPage()
      .click()

      .then(() => {
        // get information about order : Date, Reference, Name, Total
        infoOrderDate();

        infoOrderReference();

        infoOrderName();

        //.then(() => {
        infoOrderTotal().then(() => {
          cy.log(String(informationOrderPage));
        });
      });

    firstOrder().click();

    statusOrder().click();

    cancelOrder().click();

    saveDeliveryStatus().click();

    // go to cancell orders page

    getOrderPage().click();

    cancellOrderTab()
      .click()
      .then(() => {
        // get information about order : Date, Reference, Name, Total
        infoCancelDate();

        infoCancelReference();

        infoCancelName();

        //.then(() => {
        infoCancelTotal()
          .then(() => {
            cy.log(String(informationCancelPage));
          })
          .then(() => {
            expect(String(informationOrderPage)).equal(
              String(informationCancelPage)
            );
          });
      });
  });
});

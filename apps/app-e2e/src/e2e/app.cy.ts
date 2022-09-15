import { getGreeting } from '../support/app.po';

describe('App', () => {
  beforeEach(() => cy.visit('/'));

  context('UI', () => {
    it('should display welcome message', () => {
      // Custom command example, see `../support/commands.ts` file
      cy.login('my-email@something.com', 'myPassword');

      // Function helper example, see `../support/app.po.ts` file
      getGreeting().contains('Hi');
    });
  });

  context('API', () => {
    it('should see the message of the day from the api endpoint', () => {
      cy.request({
        method: 'GET',
        url: `/api/dashboard/motd`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).not.empty;
      });
    });
  });
});

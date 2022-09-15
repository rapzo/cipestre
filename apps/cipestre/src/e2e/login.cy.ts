import {
  getLoginFormPasswordLabel,
  getLoginFormUsernameLabel,
} from '../support/login.po';

describe('https://cipestre.web.app/', () => {
  beforeEach(() => cy.visit('/'));

  it('Should redirect to the login page and display the login form', () => {
    // // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file

    getLoginFormUsernameLabel().contains('Username');

    getLoginFormPasswordLabel().contains('Password');
  });
});

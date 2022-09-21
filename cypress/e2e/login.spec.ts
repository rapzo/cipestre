import { testDashboardTitleVisible } from '../support/dashboard.po';
import {
  getLoginFormPasswordLabel,
  getLoginFormUsernameLabel,
  inputLoginFormPassword,
  inputLoginFormUsername,
  submitLogin,
} from '../support/login.po';

describe('https://cipestre.web.app/', () => {
  beforeEach(() => cy.visit('/'));

  it('Should redirect to the login page and display the login form', () => {
    getLoginFormUsernameLabel().contains('Username');

    getLoginFormPasswordLabel().contains('Password');
  });

  it('Should login successfully', () => {
    inputLoginFormUsername('demo');
    inputLoginFormPassword('demo');
    submitLogin();

    testDashboardTitleVisible();
  });
});

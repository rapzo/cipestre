// export const getGreeting = () => cy.get('h1');

export const getLoginFormUsernameLabel = () => cy.get('#username-label');
export const getLoginFormPasswordLabel = () => cy.get('#password-label');

export const getLoginFormUsername = () => cy.get('#username');
export const getLoginFormPassword = () => cy.get('#password');
export const inputLoginFormUsername = (username: string) =>
  getLoginFormUsername().type(username);
export const inputLoginFormPassword = (password: string) =>
  getLoginFormPassword().type(password);

export const loginButton = () => cy.get('button.MuiButton-root[type="submit"]');
export const submitLogin = () => loginButton().click();

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: `${__dirname}/cypress/e2e/**/*.spec.ts`,
    baseUrl: 'https://cipestre.web.app/',
  },
});

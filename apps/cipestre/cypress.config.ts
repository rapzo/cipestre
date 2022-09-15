import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

const preset = nxE2EPreset(__dirname);

export default defineConfig({
  e2e: {
    ...preset,
    specPattern: `${__dirname}/src/e2e/**/*.spec.ts`,
  },
});

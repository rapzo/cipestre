import { defineConfig } from 'cypress';
import * as cypressMochawesomeReporter from 'cypress-mochawesome-reporter/lib';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    code: false,
    saveHtml: true,
  },
  e2e: {
    specPattern: `${__dirname}/cypress/e2e/**/*.spec.ts`,
    baseUrl: 'https://cipestre.web.app/',
    video: false,
    setupNodeEvents(on) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await cypressMochawesomeReporter.beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await cypressMochawesomeReporter.afterRunHook();
      });
    },
  },
});

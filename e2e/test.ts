import { test as base } from "@playwright/test";
import App from "../actions/index";

export const test = base.extend<{ app: App }>({
  page: async ({ page }, use) => {
    await use(page);
  },
  app: async ({ page, context }, use) => {
    const app = new App(page, context);
    await use(app);
  },
});

export default test;

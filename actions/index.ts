import { BrowserContext, Page } from "@playwright/test";
import BaseActions from "../actions/base.actions";
import LoginActions from "./login.actions";

export default class App {
  base: BaseActions;
  login: LoginActions;

  constructor(page: Page, context: BrowserContext) {
    this.base = new BaseActions(page, context);
    this.login = new LoginActions(page, context);
  }
}

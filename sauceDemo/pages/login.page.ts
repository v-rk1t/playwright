import type { Page } from "@playwright/test";
import { loginLocator } from "../locators/login.locator";

export class LoginPage {
  readonly $: ReturnType<typeof loginLocator>;
  readonly page: Page;
  readonly url: string;

  constructor(page: Page) {
    this.$ = loginLocator(page);
    this.page = page;
    this.url = "/v1/";
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async enterUsername(username: string) {
    await this.$.usernameTextField.fill(username);
  }

  async enterPassword(password: string) {
    await this.$.passwordTextField.fill(password);
  }

  async clickLogin() {
    await this.$.loginButton.click();
  }
}

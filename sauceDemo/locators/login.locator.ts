import type { Page } from "@playwright/test";

export const loginLocator = (page: Page) => {
  return {
    usernameTextField: page.getByRole("textbox", { name: /Username/ }),
    passwordTextField: page.getByRole("textbox", { name: /Password/ }),
    loginButton: page.getByRole("button", { name: /LOGIN/ }),
    loginBotImage: page.locator('[src*="Login_Bot_graphic"]'),
  };
};

import type { Page } from '@playwright/test';

export const inventoryLocator = (page: Page) => {
  return {
    hamburgerMenu: page.getByRole('button', { name: /Open Menu/ }),
    allItemsLink: page.getByRole('link', { name: /All Items/ }),
    aboutLink: page.getByRole('link', { name: /About/ }),
    logoutLink: page.getByRole('link', { name: /Log out/ }),
    resetAppStateLink: page.getByRole('link', { name: /Reset App State/ }),
    shoppingCartIcon: page.locator('#shopping_cart_container'),
    sortTypeDropdown: page.locator('select.product_sort_container'),
    sortAToZOption: page.locator('option[value="az"]'),
    sortZToAOption: page.locator('option[value="za"]'),
    sortLoToHiOption: page.locator('option[value="lohi"]'),
    sortHiToLoOption: page.locator('option[value="hilo"]'),
  };
};

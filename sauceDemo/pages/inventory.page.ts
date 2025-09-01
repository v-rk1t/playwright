import { expect, type Page } from "@playwright/test";
import { inventoryLocator } from "../locators/inventory.locator";

export class InventoryPage {
  readonly $: ReturnType<typeof inventoryLocator>;
  readonly page: Page;
  readonly url: string;

  constructor(page: Page) {
    this.$ = inventoryLocator(page);
    this.page = page;
    this.url = "/v1/inventory.html";
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async clickSortTypeDropdown() {
    await this.$.sortTypeDropdown.click();
  }

  async clickSortTypeOption(sortType: "AToZ" | "ZToA" | "LoToHI" | "HiToLo") {
    if (sortType === "AToZ") await this.$.sortAToZOption.click();
    if (sortType === "ZToA") await this.$.sortZToAOption.click();
    if (sortType === "LoToHI") await this.$.sortLoToHiOption.click();
    if (sortType === "HiToLo") await this.$.sortHiToLoOption.click();
  }

  async selectSortType(sortType: "AToZ" | "ZToA" | "LoToHI" | "HiToLo") {
    await this.clickSortTypeDropdown();
    await this.clickSortTypeOption(sortType);
  }

  async cartIconIsVisible() {
    await expect(this.$.shoppingCartIcon).toBeVisible();
  }
}

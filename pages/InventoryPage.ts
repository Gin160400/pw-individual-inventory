import { Page } from "@playwright/test";

export class InventoryPage {
    static dashboardPage(page: Page): any {
      throw new Error('Method not implemented.');
    }
    private page: Page; 

    readonly inventoryMenu = "//span[contains(text(),'Kho hàng')]";
    readonly dashboard ="https://hkd-dev.sapocorp.vn/admin/dashboard";

    constructor(page: Page) {
        this.page = page;
    }

    async gotoDashboard() {
        await this.page.goto(this.dashboard);
    }

    async openInventoryMenu() {
        await this.page.click(this.inventoryMenu);
    }
}

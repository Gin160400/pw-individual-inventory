import { Page } from "@playwright/test";

export class InventoryPage {
    private page: Page;
    readonly inventoryMenu = "//span[contains(text(),'Kho hàng')]";
    readonly dashboard ="https://hkd-dev.sapocorp.vn/admin/dashboard";

    constructor(page: Page) {
        this.page = page;
    }

    async gotoDashboard() {
        await this.page.waitForSelector(this.dashboard);
    }

    async openInventoryMenu() {
        await this.page.click(this.inventoryMenu);
    }
}


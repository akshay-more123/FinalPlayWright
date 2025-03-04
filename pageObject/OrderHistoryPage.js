class OrderHistoryPage {

    constructor(page) {
        this.page = page;
        this.order = page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']");
        this.ordersTable = page.locator("tbody");
        this.rows = page.locator("tbody tr");
        this.orderdIdDetails = page.locator(".col-text");
    }

    async clickOnOrder() {
        await this.order.click();
        await this.ordersTable.waitFor();
    }

    async searchOrderAndSelect(orderId) {

        for (let i = 0; i < await this.rows.count(); ++i) {
            const rowOrderId = await this.rows.nth(i).locator("th").textContent();
            if (orderId.includes(rowOrderId)) {
                await this.rows.nth(i).locator("button").first().click();

            }
        }
    }

    async getOrderId() {
        return await this.orderdIdDetails.textContent();
        console.log(orderdIdDetails);
    }

}
module.exports = { OrderHistoryPage };

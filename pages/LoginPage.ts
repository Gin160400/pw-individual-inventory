import {Page} from "@playwright/test";

export class LoginPage {
    private page: Page;

    readonly loginPageUrl = 'https://accounts-staging.sapo.vn/login?clientId=f7ZlPBz6Ok&domain=&relativeContextPath=&redirectUrl=https%3A%2F%2Faccounts-staging.sapo.vn%2Foauth%2Fauthorize%3Fclient_id%3Df7ZlPBz6Ok%26redirect_uri%3Dhttps%3A%2F%2Fhkd-dev.sapocorp.vn%2Flogin%2Foauth2%2Fcode%2Fsapo%26response_type%3Dcode%26state%3D%257B%2522AppSource%2522%3A%2522sapo_accounting%2522%2C%2522ClientDomain%2522%3A%2522https%3A%2F%2Fhkd-dev.sapocorp.vn%2522%2C%2522RedirectUrl%2522%3A%2522%2Fadmin%2Fdashboard%2522%2C%2522SaTenantId%2522%3Anull%257D&appSource=WEB';

    readonly usernameInput = '#username';
    readonly passwordInput = '#password';
    readonly loginButton = "form[id='pos-login-form'] button[type='submit']";

    readonly individualSite = "//span[text()='sapo - MST: 1234567891']";
    
    constructor(page: Page) {
        this.page = page;
    }

    async gotoLoginPage() {
        await this.page.goto(this.loginPageUrl);
    }

    async login(username: string, password: string) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click('body');
        await this.page.waitForSelector(this.loginButton, {state: 'visible'});
        await this.page.click(this.loginButton);
    }

    async gotoIndividualSite(){

        const [DashboardPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.click(this.individualSite)
    ]);

    await DashboardPage.waitForLoadState();

    return DashboardPage;
    }}
import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/LoginPage';
import { log } from 'node:console';
import { InventoryPage } from '../pages/InventoryPage';
import { isContext } from 'node:vm';

test('Login successfully', async({page}) =>{
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login(loginData.username, loginData.password);
  await loginPage.gotoIndividualSite();

  const DashboardPage = await loginPage.gotoIndividualSite();

  const inventoryPage = new InventoryPage(DashboardPage);
  await inventoryPage.openInventoryMenu();
})
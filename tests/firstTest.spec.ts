import {test,expect} from '@playwright/test';
import {DemoUsers} from '../utils/test-data';
import {testURLs} from '../utils/test-data'
test('This is a sample Login test',async({page})=>{
    
    await page.goto(testURLs.orangehrm);
    await page.getByRole('textbox', { name: 'Username:' }).fill(DemoUsers.standard.username);
    await page.getByLabel('Password:').fill(DemoUsers.standard.password);
    await page.locator('#signInBtn').click();
    await expect(page.getByRole('link', { name: 'ProtoCommerce Home' })).toBeVisible(); 
})
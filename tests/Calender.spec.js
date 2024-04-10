const {test,expect} = require('@playwright/test');
const exp = require('constants');

test('select a date from date-picker', async ({browser})=>
{
    const day = "25";
    const month = "1";
    const year = "2026"

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    //select a date from date-picker
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label__labelText").click();
    await page.locator(".react-calendar__navigation__label__labelText ").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click();
    await page.locator("//abbr[text()='"+day+"']").click();
    const actDay = await page.locator("[value='25']").first().textContent();
    const actMonth = await page.locator("[value='1']").first().textContent();
    const actYear = await page.locator("[value='2026']").first().textContent();
    expect(day===actDay);
    expect(month===actMonth);
    expect(year===actYear);
    await page.pause();


})
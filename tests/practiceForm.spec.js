import test, { expect } from '@playwright/test';
import path from 'path';

test('practice form', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.getByRole('heading', { name: 'Forms' }).click();
    await page.getByText('Practice Form').click();
    await expect(page.getByRole('heading', { name: 'Practice Form' })).toBeVisible();
    await page.locator('#firstName').fill('firstName');
    await page.locator('#lastName').fill('lastName');
    await page.locator('#userEmail').fill('useremail@gmail.com');
    await page.locator('label[for="gender-radio-1"]').click();
    await page.locator('#userNumber').fill('9812345678');

    await page.locator('#dateOfBirthInput').click();
    await page.selectOption('.react-datepicker__month-select', '11');
    await page.selectOption('.react-datepicker__year-select', '1989');
    await page.getByRole('option', { name: 'Choose Friday, December 15th, 1989' }).click();

    await page.locator('#subjectsInput').fill('phy');
    await page.locator('.subjects-auto-complete__menu-list >> text=Physics').click();

    await page.locator('label[for="hobbies-checkbox-2"]').click();

    const filePath = path.resolve(__dirname, '../images/image.jpeg');
    await page.locator('#uploadPicture').setInputFiles(filePath);

    await page.locator('#currentAddress').fill('Kathmandu, Nepal');
    await page.locator('#state').click();
    await page.getByText('NCR', { exact: true }).click();

    await page.locator('#city').click();
    await page.getByText('Noida', { exact: true }).click();

    await page.locator('#submit').click();
    await page.locator('.modal-dialog').waitFor();
    await page.getByRole('button', { name: 'Close' }).click();
    await expect(page.getByRole('heading', { name: 'Student Registration Form' })).toBeVisible();

});
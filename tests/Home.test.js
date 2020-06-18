require('expect-puppeteer');


describe('Increment button', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080/')
  })

  it('#number-field should start at 0', async () => {
    const field = await page.$('#number-field');
    await expect(field).toMatch('0');
  });

  it('#number-button should have text "Increment"', async () => {
    const button = await page.$('#number-button');
    await expect(button).toMatch('Increment');
  });

  it('#number-button should increment #number-field', async () => {
    await page.click('#number-button');
    await expect(page).toMatchElement('#number-field', {
      text: '1'
    });

    await page.click('#number-button');
    await expect(page).toMatchElement('#number-field', {
      text: '2'
    })
  });
})

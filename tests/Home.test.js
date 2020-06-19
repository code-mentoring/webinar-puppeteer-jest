const { getStyles } = require('./lib');

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


describe('Input border color', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080/')
  })

  it('#focus-field should start with red border', async () => {
    const styles = await getStyles('#focus-field');
    expect(styles.borderColor).toEqual('rgb(255, 0, 0)');
  });

  it('#focus-field should have blue border on hover', async () => {
    await page.hover('#focus-field');
    const styles = await getStyles('#focus-field');
    expect(styles.borderColor).toEqual('rgb(0, 0, 255)');
  });

  it('#focus-field should have green border on focus', async () => {
    await page.focus('#focus-field');
    const styles = await getStyles('#focus-field');
    expect(styles.borderColor).toEqual('rgb(0, 255, 0)');
  });

})


describe('Responsive design', () => {
  it('body should have white for > 400', async () => {
    const styles = await getStyles('body');
    expect(styles.backgroundColor).toEqual('rgba(0, 0, 0, 0)');
  });

  it('body should have grey for < 400', async () => {
    page.setViewport({ width: 399, height: 480 });
    const styles1 = await getStyles('body');
    expect(styles1.backgroundColor).toEqual('rgb(128, 128, 128)');

    page.setViewport({ width: 401, height: 480 });
    const styles2 = await getStyles('body');
    expect(styles2.backgroundColor).toEqual('rgba(0, 0, 0, 0)');
  });
});

/**
 * Get the computed styles for a element
 * @param {string} selector Query Selector of element
 */
export const getStyles = (selector) =>
  // Run the JS "inside" the Puppeteer page
  page.evaluate(selector => {
    // Run inside the page, NOT in Jest
    return window.getComputedStyle(document.querySelector(selector));
  }, selector)

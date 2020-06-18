/**
 * Get the computed styles for a element
 * @param {string} selector Query Selector of element
 */
module.exports.getStyles = (selector) =>
  // Run the JS "inside" the Puppeteer page
  page.evaluate(selector => {
    // Run inside the page, NOT in Jest
    const ele = document.querySelector(selector);

    // if (!ele) throw new Error(`Could not find element with selector '${selector}'`);
    if (!ele) return null;

    // Convert to plain JSON, not the fancy CSSRules
    return JSON.parse(JSON.stringify(window.getComputedStyle(ele)));

  }, selector)

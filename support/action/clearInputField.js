/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   selector Element selector
 */
export default (selector) => {
    while ($(selector).getValue() !== '') {
        $(selector).doubleClick();
        browser.keys('Backspace');
    }
};

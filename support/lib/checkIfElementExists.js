/**
 * Check if the given element exists in the DOM one or more times
 * @param  {String}  selector  Element selector
 * @param  {Boolean} falsCase Check if the element (does not) exists
 * @param  {Number}  exactly  Check if the element exists exactly this number
 *                            of times
 */
export default (selector, falsCase, exactly) => {
    /**
     * Default timeout for all waitFor* commands
     * @type {Int}
     */
    const timeout = browser.options.waitforTimeout;

    if (falsCase === true) {
        browser.waitUntil(() => $$(selector).length === 0,
            timeout, `Element "${selector}" should not exist on the page`);
    } else if (exactly) {
        browser.waitUntil(() => $$(selector).length === Number(exactly),
            timeout, `Element "${selector}" should exist exactly ${exactly} time(s)`);
    } else {
        browser.waitUntil(() => $$(selector).length > 0,
            timeout, `Element "${selector}" should exist on the page`);
    }
};

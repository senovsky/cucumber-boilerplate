/**
 * Check the title of the current browser window
 * @param  {Type}     falseCase     Whether to check if the title matches the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
export default (falseCase, expectedTitle) => {
    /**
     * Default timeout for all waitFor* commands
     * @type {Int}
     */
    const timeout = browser.options.waitforTimeout;

    if (falseCase) {
        browser.waitUntil(() => browser.getTitle() !== expectedTitle,
            timeout, `Expected title not to be "${expectedTitle}"`);
    } else {
        browser.waitUntil(() => browser.getTitle() === expectedTitle,
            timeout, `Expected title to be "${expectedTitle}"`);
    }
};

/**
 * Check if the given element is (not) visible
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
export default (selector, falseCase) => {
    /**
     * Visible state of the give element
     * @type {String}
     */
    const isDisplayed = $(selector).isDisplayed();

    if (falseCase) {
        $(selector).waitForDisplayed(undefined, true);
        // expect(isDisplayed).to.not
        //     .equal(true, `Expected element "${selector}" not to be displayed`);
    } else {
        $(selector).waitForDisplayed();
        // expect(isDisplayed).to
        //     .equal(true, `Expected element "${selector}" to be displayed`);
    }
};

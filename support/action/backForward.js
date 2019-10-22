/**
 * Perform an action on browser history
 * @param  {String}   direction  The direction to go (back or forward)
 */
export default (direction) => {
    /**
     * The method to call on the browser history
     * @type {String}
     */
    if (direction === 'back') {
        browser.back();
    } else {
        browser.forward();
    }
};

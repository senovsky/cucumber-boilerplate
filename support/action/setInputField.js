/**
 * Set the value of the given input field to a new value or add a value to the
 * current selector value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   value   The value to set the selector to
 * @param  {String}   selector Element selector
 */
export default (method, value, selector) => {
    /**
     * The command to perform on the browser object (addValue or setValue)
     * @type {String}
     */
    const command = (method === 'add') ? 'addValue' : 'setValue';
    let checkValue = value;
    let origValue = '';

    $(selector).waitForClickable();

    if (method === 'add') {
        origValue = $(selector).getValue();
    } else {
        while ($(selector).getValue() !== '') {
            $(selector).doubleClick();
            browser.keys('Backspace');
        }
    }

    if (!value) {
        checkValue = '';
    }

    $(selector)[command](checkValue);

    const getValue = $(selector).getValue();
    expect(getValue).to.equal(origValue + checkValue);
};

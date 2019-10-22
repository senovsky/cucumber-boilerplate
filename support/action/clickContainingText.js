import checkIfElementExists from '../lib/checkIfElementExists';

/**
 * Clicks on the first element containing the expected text
 * @param  {String}   element       Element selector
 * @param  {String}   expectedText  The text to check against
 */
export default (element, expectedText) => {

    checkIfElementExists(element);

    const elements = browser.$$(element);

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].getText().indexOf(expectedText) !== -1) {
            elements[i].click();
            break;
        }
    }
};

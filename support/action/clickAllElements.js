import checkIfElementExists from '../lib/checkIfElementExists';

/**
 * Perform an click action on the given element
 * @param  {String}   elems Element selector
 */
export default (elems) => {
    checkIfElementExists(elems);
    $$(elems).forEach(function (element) {
        element.click();
    });
};

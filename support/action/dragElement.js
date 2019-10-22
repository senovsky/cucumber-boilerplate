import checkIfElementExists from '../lib/checkIfElementExists';

/**
 * Drag a element to a given destination
 * @param  {String}   selector    The selector for the source element
 * @param  {String}   destination The selector for the destination element
 */
export default (selector, destination) => {
    checkIfElementExists(selector);
    checkIfElementExists(destination);
    $(selector).dragAndDrop($(destination));
};

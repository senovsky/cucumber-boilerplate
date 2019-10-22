import checkIfElementExists from '../lib/checkIfElementExists';

/**
 * Perform an click action on the given element
 * @param  {String}   file    Filepath
 * @param  {String}   element Element selector
 */
export default (file, element) => {
    checkIfElementExists(element);
    browser.uploadFile(element, process.cwd() + '/' + file)
};

/**
 * Perform an click action on the given element
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   selector Element selector
 */
export default (type, selector) => {
    /**
     * Element to perform the action on
     * @type {String}
     */
    const selector2 = (type === 'link') ? `=${selector}` : selector;

    if ($(selector2).isDisplayed()) {
        $(selector2)['click']();
    };
};

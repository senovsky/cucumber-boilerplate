var input = 'Beilagenteller - Mixed vegetables plate';

var output = input.replace(/;#\d*;#/g, "<br>");

document.write(output);
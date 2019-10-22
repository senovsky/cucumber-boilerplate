sed -i "1i@media (min-width:992px) { .modal-lg { width: 99% }}" node_modules/cucumber-html-reporter/templates/_common/bootstrap.hierarchy/style.css
sed -i 's|Cucumber Feature|E2E Test|g' node_modules/cucumber-html-reporter/templates/bootstrap/index.html
export LINE=$(sed -n '/description.replace/=' node_modules/cucumber-html-reporter/templates/_common/bootstrap.hierarchy/features.html)
export PREV=$((LINE-1))
sed -i "${LINE}s|</div>|<div class=pull-right-lg><strong> Browser: </strong><%= feature.metadata.browser.name.charAt(0).toUpperCase() + feature.metadata.browser.name.slice(1) %> <%= feature.metadata.browser.version %></div></div>|g" node_modules/cucumber-html-reporter/templates/_common/bootstrap.hierarchy/features.html
sed -i "${PREV}d" node_modules/cucumber-html-reporter/templates/_common/bootstrap.hierarchy/features.html
sed -i "${LINE}d" node_modules/cucumber-html-reporter/templates/_common/bootstrap.hierarchy/features.html

import { Rule } from "ember-template-lint";
import isRouteTemplate from "../helpers/is-route-template.js";

function isFile(loc) {
    return loc.start && loc.start.line === 1 && loc.start.column === 0;
}

export default class RequireValidPageTitle extends Rule {
    constructor(options) {
        super(options);
    
        this.isRouteTemplate = isRouteTemplate(options.filePath);
        this.isPageTitleFound = false;
    }

    visitor() {
        if (!this.isRouteTemplate) {
          // do nothing for component templates
          return {};
        }

        return {
            MustacheStatement(node) {
                if (node.path.type === 'PathExpression' && node.path.parts[0] === 'page-title') {
                    this.isPageTitleFound = true;
                }
            },
            Program: {
                exit(node) {
                    if (!this.isPageTitleFound && isFile(node.loc)) {
                        this.log({
                            message: 'Missing page title',
                            node,
                            fix: 'Add a page title using the `{{page-title}}` helper'
                        });
                    }
                }
            }
        };
    }
}
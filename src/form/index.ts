
import { strings } from '@angular-devkit/core';
import { Rule, SchematicContext, Tree, chain, mergeWith, apply, template, url, move, branchAndMerge
} from '@angular-devkit/schematics';
import { montarMatFormFields } from  './utils/angular-material-tags';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function form(options: any): Rule {
  return (host: Tree, context: SchematicContext) => {

    context.logger.info('(options) : ' + JSON.stringify(options));

    setupOptions(options);

    const templateSource = apply(url('./files'), [
      template({
        ...strings,
        ...options
      }),
      move(options.path || '')
    ]);


    const rule = chain([
      branchAndMerge(chain([
        mergeWith(templateSource)
      ]))
    ]);

    return rule(host, context);
  }
}

function setupOptions(options: any) {
  options.path = `src/app/${options.name}`;

  montarMatFormFields(options);

}
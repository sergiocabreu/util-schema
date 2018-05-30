import { Rule, SchematicContext, Tree, chain, mergeWith, apply, template, url
} from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function form(options: any): Rule {
  return chain([
    (_tree: Tree, context: SchematicContext) => {
      // Show the options for this Schematics.
      context.logger.info('My Full Schematic: ' + JSON.stringify(options));
    },
  
    mergeWith(apply(url('./files'), [
      template({
        name: options.name,
      }),
    ])),
  ]);
}

/*  return (tree: Tree, _context: SchematicContext) => {

    options.path = options.path ? normalize(options.path) : options.path;

    tree.create(options.name || 'hello', JSON.stringify(options));
  };*/


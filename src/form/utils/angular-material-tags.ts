import { strings } from '@angular-devkit/core';

export function montarMatFormFields(options: any) {
    
    let matFormFields: string = '';
    
    options.inputs.forEach((element : any) => {
        matFormFields = matFormFields.concat(addMatFormFieldTag(element));
    });
    
    options.matFormFields = matFormFields;
}

function addMatFormFieldTag(campo: any) {
    return `<mat-form-field>\n
                <input matInput placeholder="${campo}" formControlName=${strings.camelize(campo)} >\n
            </mat-form-field>\n`;
}

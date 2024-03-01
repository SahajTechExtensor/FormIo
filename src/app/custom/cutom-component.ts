import { Components, Formio } from "formiojs";

export class CutomComponent extends Components.components.htmlelement {
  static override schema(...extend: any[]) {
    return super.schema({
      label: 'Sahaj Header',
      type: 'htmlelement',
      tag: 'h1'
    });
  }
  
  static get builderInfo() {
    return {
      title: 'SahajHeader',
      group: 'layout',
      icon: 'code',
      weight: 2,
      documentation: '/userguide/#html-element-component',
      schema: this.schema()
    };
  }
  override render(_children: string) {
    let table = '<table class="table table-compressed"><tbody>';
    for (let i = 0; i < this.component.numRows; i++) {
    	table += '<tr>';
      for (let j = 0; j < this.component.numCols; j++) {
      	table += '<td>';
        // table += this.renderCell(i, j);
        table += '</td>';
      }
      table += '</tr>';
    }
    table += '</tbody></table>';
    return super.render(table);
  }

}
// CutomComponent.editForm = (...args) => {
//   // const editForm = htmlelement.editForm(...args);
//   // const tagComponent = getComponent(htmlelement.components, 'tag');
//   tagComponent.type = 'select';
//   tagComponent.dataSrc = 'values';
//   tagComponent.data = {
//     values: [
//       {label: 'H1', value: 'h1'},
//       {label: 'H2', value: 'h2'},
//       {label: 'H3', value: 'h3'},
//       {label: 'H4', value: 'h4'},
//       {label: 'H5', value: 'h5'}
//     ]
//   };
//   return editForm;
// };
/**
 * Change the edit form to make the "tag" component a select dropdown
 * instead of a textfield so that they can only configure the "h2" fields.
 */
// CutomComponent: any.editForm = (...args) => {
//   const editForm = HTMLElement.editForm(...args);
//   const tagComponent = Formio.Utils.getComponent(editForm.components, 'tag');
//   tagComponent.type = 'select';
//   tagComponent.dataSrc = 'values';
//   tagComponent.data = {
//     values: [
//       {label: 'H1', value: 'h1'},
//       {label: 'H2', value: 'h2'},
//       {label: 'H3', value: 'h3'},
//       {label: 'H4', value: 'h4'},
//       {label: 'H5', value: 'h5'}
//     ]
//   };
//   return editForm;
// };
// }
// Use the component.
// Formio.use({
//   components: {
//     checkmatrix: CheckMatrix
//   }
// });

// /**
//  * This file shows how to create a custom component.
//  *
//  * Get the base component class by referencing Formio.Components.components map.
//  */
// import { Formio, Components } from 'formiojs';
// const FieldComponent = (Components as any).components.field;


// /**
//  * Here we will derive from the base component which all Form.io form components derive from.
//  *
//  * @param component
//  * @param options
//  * @param data
//  * @constructor
//  */
// export default class CheckMatrix extends (FieldComponent as any) {
//   public checks: any[][];
//   constructor(component: any, options: any, data: any) {
//     super(component, options, data);
//     this.checks = [];
//   }

//   static schema() {
//     return FieldComponent.schema({
//       type: 'checkmatrix',
//       numRows: 3,
//       numCols: 3
//     });
//   }

// //   public static editForm = editForm;

//   static builderInfo = {
//     title: 'Check Matrix',
//     group: 'basic',
//     icon: 'fa fa-table',
//     weight: 70,
//     documentation: 'http://help.form.io/userguide/#table',
//     schema: CheckMatrix.schema()
//   }

//   get tableClass() {
//     let tableClass = 'table ';
//     ['striped', 'bordered', 'hover', 'condensed'].forEach((prop) => {
//       if (this['component'][prop]) {
//         tableClass += `table-${prop} `;
//       }
//     });
//     return tableClass;
//   }

//   get emptyValue() {
//     return [];
//   }

//   public render() {
//     return super.render(this.renderTemplate('checkmatrix', {
//       tableClass: this.tableClass
//     }));
//   }

// //   refKey(i: number, j: number) {
// //     return `${this.component.key}-${i}-${j}`;
// //   }

//   /**
//    * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
//    * elements to attach functionality to.
//    *
//    * @param element
//    * @returns {Promise}
//    */
//   attach(element) {
//     const refs = {};
//     // Iterate through all cells and add refs.
//     for (let i = 0; i < this.component.numRows; i++) {
//       for (let j = 0; j < this.component.numCols; j++) {
//         refs[this.refKey(i, j)] = 'single';
//       }
//     }

//     // Load the references.
//     this.loadRefs(element, refs);

//     // Re-iterate through the refs and add event listeners.
//     for (let i = 0; i < this.component.numRows; i++) {
//       for (let j = 0; j < this.component.numCols; j++) {
//         this.addEventListener(this.refs[this.refKey(i, j)], 'click', () => this.updateValue())
//       }
//     }

//     // Allow basic component functionality to attach like field logic and tooltips.
//     return super.attach(element);
//   }

//   /**
//    * Get the value of the component from the dom elements.
//    *
//    * @returns {Array}
//    */
//   getValue() {
//     const value = [];
//     for (let i = 0; i < this.component.numRows; i++) {
//       value[i] = [];
//       for (let j = 0; j < this.component.numCols; j++) {
//         if (this.refs.hasOwnProperty(this.refKey(i,j))) {
//           value[i][j] = !!this.refs[this.refKey(i,j)].checked;
//         }
//       }
//     }
//     return value;
//   }

//   /**
//    * Set the value of the component into the dom elements.
//    *
//    * @param value
//    * @returns {boolean}
//    */
//   setValue(value) {
//     if (!value) {
//       return;
//     }
//     for (let i = 0; i < this.component.numRows; i++) {
//       for (let j = 0; j < this.component.numCols; j++) {
//         if (
//           value.length > i &&
//           value[i].length > j &&
//           this.refs.hasOwnProperty(this.refKey(i,j))
//         ) {
//           const ref = this.refs[this.refKey(i,j)];
//           const checked = value[i][j] ? 1 : 0;
//           ref.value = checked;
//           ref.checked = checked;
//         }
//       }
//     }
//   }
// }

// Use the component.
// Formio.use({
//   components: {
//     checkmatrix: CheckMatrix
//   }
// });

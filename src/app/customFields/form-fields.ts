import { Components, Formio } from "@formio/angular";

export class FormFields extends Components.components.input {
  static override schema(...extend: any[]) {
    return super.schema({
      type: 'name',
      label: 'Name Inp',
      key: 'name',
    });
  }

  static get builderInfo() {
    return {
      title: 'Custom Name',
      icon: 'fa fa-star',
      group: '_custom',
      weight: 0,
      schema: this.schema(),
    };
  }
}


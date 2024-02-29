import { NgModule } from '@angular/core';
import customTemplate from '../../custom/custom-template';
import { Formio, FormioModule, Templates } from '@formio/angular';
import { FormFields } from '../../customFields/form-fields';
import { RatingField } from '../../customFields/rating-field';
import { DataGrid } from '../../custom/data-grid';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  providers:[
    FormFields,
    RatingField,
    DataGrid
  ]
})
export class CustomFormModule {

 }

 Formio.use({
  components: {
      name: FormFields,RatingField,DataGrid
  },
});


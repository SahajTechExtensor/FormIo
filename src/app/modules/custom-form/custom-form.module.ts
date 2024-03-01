import { NgModule } from '@angular/core';
import { Formio,  Templates } from '@formio/angular';
import { FormFields } from '../../customFields/form-fields';
import { RatingField } from '../../customFields/rating-field';
import { DataGrid } from '../../custom/data-grid';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SyncfusionDataGridComponent } from '../../components/syncfusion-data-grid/syncfusion-data-grid.component';
import { CutomComponent } from '../../custom/cutom-component';


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
 
 //  SyncfusionDataGridComponent,
 Formio.use({
  components: {
      name: FormFields,RatingField,DataGrid,
      htmlelement: CutomComponent
  },
});

import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentControlsService {

  constructor() { 

  }
  // public FormTitileAndControls:any
  public PutControls:EventEmitter<any>= new EventEmitter<any>;
  GetControl(data:any){
    this.PutControls.emit(data)
    // this.FormTitileAndControls=data;
  }
}

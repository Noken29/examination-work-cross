import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {FunctionModel} from "../model/function.model";
import {FunctionService} from "../service/function.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  functionModel? : FunctionModel

  constructor(private functionService : FunctionService) {
  }

  getFunc(event : any) {
    if (event as FunctionModel) {
      this.functionModel = event
      this.calculateNext()
    }
  }

  calculateNext() {
    try {
      return this.functionService.calculateNextFunction(this.functionModel, 0.01)
    } catch (e) {
      return ''
    }
  }

}

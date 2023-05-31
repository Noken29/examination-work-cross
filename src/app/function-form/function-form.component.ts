import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FunctionService} from "../service/function.service";
import {FunctionType} from "../model/function.type";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {FunctionModel} from "../model/function.model";

@Component({
  selector: 'app-function-form',
  templateUrl: './function-form.component.html',
  styleUrls: ['./function-form.component.scss'],
})
export class FunctionFormComponent  implements OnInit {

  functionTypes: FunctionType[]
  functionModel?: FunctionModel
  functionForm!: FormGroup
  selectedFunction: number = 0

  @Output() functionAddEvent: EventEmitter<FunctionModel> = new EventEmitter<FunctionModel>()

  constructor(private functionService: FunctionService, private fb : FormBuilder) {
    this.functionTypes = functionService.getFunctionTypes()
    this.functionForm = this.fb.group({
    })
    for(let functionType of this.functionTypes) {
      for(let paramType of functionType.paramTypes) {
        this.functionForm.addControl(paramType, new FormControl(Validators.required))
      }
    }
  }

  applyFuncSelect(index : any) {
    this.selectedFunction = parseInt(index);
    this.functionModel = undefined
  }

  onSubmit() {
    let target = this.functionTypes[this.selectedFunction]
    let params = []
    for (let paramType of target.paramTypes) {
      params.push(this.functionForm.get(paramType)?.value)
    }
    this.functionModel = new FunctionModel(
      params,
      target
    )
    this.functionAddEvent.emit(this.functionModel)
    console.log(this.functionModel)
  }

  ngOnInit() {}

}

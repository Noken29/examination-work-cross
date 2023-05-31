import {FunctionType} from "./function.type";

export class FunctionModel {
  params : number[]
  funcType : FunctionType

  constructor(params: number[], funcType : FunctionType) {
    this.params = params
    this.funcType = funcType
  }

}

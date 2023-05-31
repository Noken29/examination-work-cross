
export class FunctionType {
  name : string
  paramTypes : string[]
  func : ((params : number[]) => number)

  constructor(name: string, paramTypes: string[], func: (params: number[]) => number) {
    this.name = name;
    this.paramTypes = paramTypes;
    this.func = func;
  }
}

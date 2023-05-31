import { Injectable } from '@angular/core';
import {FunctionType} from "../model/function.type";
import {FunctionModel} from "../model/function.model";

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  private functionTypes : FunctionType[] = [
    new FunctionType('sin(x)', ['x'], (params: number[]): number => Math.sin(params[0])),
    new FunctionType('tg(x)', ['x'], (params: number[]): number => Math.tan(params[0])),
    new FunctionType('x^n', ['x', 'n'], (params: number[]): number => Math.pow(params[0], params[1])),
  ]

  getFunctionTypes(): FunctionType[] {
    return this.functionTypes
  }

  calculateNextFunction(func : FunctionModel | undefined, h = 0.1) : number {
    if (func === undefined)
      throw new Error('Function is unknown.')
    if (h === 0)
      throw new Error('H is zero.')
    let params = []
    for (let param of func.params) {
      params.push(param)
    }
    let x = params[0]
    params[0] = x + h
    let firstFuncValue = func.funcType.func(params)
    console.log(firstFuncValue)
    console.log(params[0])
    params[0] = x - h
    let secondFuncValue = func.funcType.func(params)
    console.log(secondFuncValue)
    console.log(params[0])
    return ((firstFuncValue - secondFuncValue) / (2 * h))
  }

  constructor() { }
}

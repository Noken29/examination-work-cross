import { TestBed } from '@angular/core/testing';

import { FunctionService } from './function.service';
import {FunctionType} from "../model/function.type";
import {FunctionModel} from "../model/function.model";

describe('FunctionService', () => {
  let service: FunctionService;
  let functionTypes: FunctionType[]

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionService);
    functionTypes = service.getFunctionTypes()
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Calculate d(sin(x))/dx', () => {
    let functionModel = new FunctionModel([Math.PI], functionTypes[0])
    expect(service.calculateNextFunction(functionModel, 0.5).toFixed(2)).toBe(
      (Math.sin(Math.PI + 0.5) - Math.sin(Math.PI - 0.5)).toFixed(2)
    )
  })

  it('Calculate d(tg(x))/dx', () => {
    let functionModel = new FunctionModel([Math.PI / 4], functionTypes[1])
    expect(service.calculateNextFunction(functionModel, 0.5).toFixed(2)).toBe(
      (Math.tan(Math.PI / 4 + 0.5) - Math.tan(Math.PI / 4 - 0.5)).toFixed(2)
    )
  })

  it('Calculate d(x^2)/dx', () => {
    let functionModel = new FunctionModel([2, 2], functionTypes[2])
    expect(service.calculateNextFunction(functionModel, 0.5).toFixed(2)).toBe(
      (Math.pow(2 + 0.5, 2) - Math.pow(2 - 0.5, 2)).toFixed(2)
    )
  })
});

import { Injectable } from '@angular/core';
import { CalculatorContext, CalculatorService } from '../calculator-shared/calculator.service';

@Injectable()
export class ArithmeticCalculatorService extends CalculatorService {
  calculate({ inputA, inputB }: CalculatorContext): string {
    const result = Number(inputA) + Number(inputB);
    return result ? result.toString() : 'Error';
  }
}
import { Injectable } from '@angular/core';
import { CalculatorContext, CalculatorService } from '../calculator-shared/calculator.service';

@Injectable()
export class StringConcatenationCalculatorService extends CalculatorService {
    calculate({ inputA, inputB }: CalculatorContext): string {
      return String(inputA) + String(inputB);
    }
}

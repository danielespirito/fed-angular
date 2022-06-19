import { Component } from '@angular/core';
import { CalculatorService } from '../calculator-shared/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  inputA: string = '';
  inputB: string = '';
  result: string = '';

  constructor(private readonly calculatorService: CalculatorService) {}

  calculate(): void {
    this.result = this.calculatorService.calculate({
      inputA: this.inputA,
      inputB: this.inputB,
    });
  }
}

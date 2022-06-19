import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticCalculatorService } from './arithmetic-calculator.service';
import { CalculatorService } from '../calculator-shared/calculator.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{ 
    provide: CalculatorService, 
    useClass: ArithmeticCalculatorService 
  }]
})
export class ArithmeticCalculatorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorService } from '../calculator-shared/calculator.service';
import { StringConcatenationCalculatorService } from './string-concatenation-calculator.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: CalculatorService,
      useClass: StringConcatenationCalculatorService,
    },
  ],
})
export class StringConcatenationCalculatorModule {}

import { Injectable } from "@angular/core";
import { CalculatorSharedModule } from "./calculator-shared.module";

export interface CalculatorContext {
  inputA: string;
  inputB: string;
}

@Injectable({ 
  providedIn: CalculatorSharedModule
})
export abstract class CalculatorService { 
  abstract calculate(context: CalculatorContext): string;
}

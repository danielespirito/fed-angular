import { EnvironmentConfig } from "src/types";
import { ArithmeticCalculatorModule } from "src/app/arithmetic-calculator/arithmetic-calculator.module";

export const environment: EnvironmentConfig = {
  production: false,
  calculatorLogicModule: ArithmeticCalculatorModule, //Default implementation
};

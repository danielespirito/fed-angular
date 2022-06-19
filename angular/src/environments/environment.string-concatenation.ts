import { EnvironmentConfig } from 'src/types';
import { StringConcatenationCalculatorModule } from 'src/app/string-concatenation-calculator/string-concatenation-calculator.module';

export const environment: EnvironmentConfig = {
  production: false,
  calculatorLogicModule: StringConcatenationCalculatorModule, //Default implementation
};

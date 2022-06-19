import { ArithmeticCalculatorService } from './arithmetic-calculator.service';

describe('ArithmeticCalculatorService', () => {
  let service: ArithmeticCalculatorService;

  beforeEach(() => {
    service = new ArithmeticCalculatorService();
  });

  it('should return an "Error" string if one of inputs is invalid', () => {
    expect(service.calculate({ inputA: 'a', inputB: '2' })).toEqual('Error');
  });

  it('should calculate correctly the arithmetic value when both inputs are valid integers', () => {
    expect(service.calculate({ inputA: '2', inputB: '3' })).toEqual('5');
  });

  it('should calculate correctly the arithmetic value when both inputs are valid decimals', () => {
    expect(service.calculate({ inputA: '0.2', inputB: '0.3' })).toEqual('0.5');
  });
});

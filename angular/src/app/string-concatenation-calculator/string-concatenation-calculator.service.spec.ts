import { StringConcatenationCalculatorService } from "./string-concatenation-calculator.service.service";

describe('StringConcatenationCalculatorService', () => { 
    let service: StringConcatenationCalculatorService;

    beforeEach(() => { service = new StringConcatenationCalculatorService(); });

    it('calculates the string concatenation when both inputs are numbers', () => {
        expect(service.calculate({ inputA: '2', inputB: '5' })).toEqual('25');
    });

    it('calculates the string concatenation when one is a number and the other is a string', () => {
        expect(service.calculate({ inputA: 'a', inputB: '2' })).toEqual('a2');
    });
})
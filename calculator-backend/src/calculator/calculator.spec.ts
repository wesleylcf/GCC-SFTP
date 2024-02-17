import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let calculatorService: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();

    calculatorService = module.get<CalculatorService>(CalculatorService);
  });

  describe('addNumbers', () => {
    it('should be able to handle two positive numbers', () => {
      const result = calculatorService.add(5, 3);
      expect(result).toBe(8);
    });
    it('should be able to handle one positive then one negative number', () => {
      const result = calculatorService.add(5, -3);
      expect(result).toBe(2);
    });
    it('should be able to handle one negative then one positive number', () => {
      const result = calculatorService.add(-5, 3);
      expect(result).toBe(-2);
    });
    it('should be able to handle two negative numbers', () => {
      const result = calculatorService.add(-5, -3);
      expect(result).toBe(-8);
    });
  });

  describe('subtractNumbers', () => {
    it('should be able to handle two positive numbers', () => {
      const result = calculatorService.subtract(5, 3);
      expect(result).toBe(2);
    });
    it('should be able to handle one positive then one negative number', () => {
      const result = calculatorService.subtract(5, -3);
      expect(result).toBe(8);
    });
    it('should be able to handle one negative then one positive number', () => {
      const result = calculatorService.subtract(-5, 3);
      expect(result).toBe(-8);
    });
    it('should be able to handle two negative numbers', () => {
      const result = calculatorService.subtract(-5, -3);
      expect(result).toBe(-2);
    });
  });
});

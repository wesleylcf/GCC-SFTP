import { Test, TestingModule } from '@nestjs/testing';
import { MathService } from '../math.service';

describe('MathService', () => {
  let mathService: MathService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathService],
    }).compile();

    mathService = module.get<MathService>(MathService);
  });

  describe('addNumbers', () => {
    it('should be able to handle two positive numbers', () => {
      const result = mathService.add(5, 3);
      expect(result).toBe(8);
    });
    it('should be able to handle one positive then one negative number', () => {
      const result = mathService.add(5, -3);
      expect(result).toBe(2);
    });
    it('should be able to handle one negative then one positive number', () => {
      const result = mathService.add(-5, 3);
      expect(result).toBe(-2);
    });
    it('should be able to handle two negative numbers', () => {
      const result = mathService.add(-5, -3);
      expect(result).toBe(-8);
    });
  });

  describe('subtractNumbers', () => {
    it('should be able to handle two positive numbers', () => {
      const result = mathService.subtract(5, 3);
      expect(result).toBe(2);
    });
    it('should be able to handle one positive then one negative number', () => {
      const result = mathService.subtract(5, -3);
      expect(result).toBe(8);
    });
    it('should be able to handle one negative then one positive number', () => {
      const result = mathService.subtract(-5, 3);
      expect(result).toBe(-8);
    });
    it('should be able to handle two negative numbers', () => {
      const result = mathService.subtract(-5, -3);
      expect(result).toBe(-2);
    });
  });
});

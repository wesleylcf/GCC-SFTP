import { Body, Controller, Post } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculateTwoDto } from './dto';

@Controller('/calculate')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post('addTwo')
  add(@Body() { operand1, operand2 }: CalculateTwoDto): {
    result: number;
  } {
    const result = this.calculatorService.add(operand1, operand2);
    return { result };
  }

  @Post('subtractTwo')
  subtract(@Body() { operand1, operand2 }: CalculateTwoDto): {
    result: number;
  } {
    const result = this.calculatorService.subtract(operand1, operand2);
    return { result };
  }
}

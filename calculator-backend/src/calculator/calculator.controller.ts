import { Body, Controller, Post } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { BaseCalculatorDto } from './dto/base.dto';

@Controller('/calculate')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post('add')
  add(@Body() { operand1, operand2 }: BaseCalculatorDto): { result: number } {
    const result = this.calculatorService.add(operand1, operand2);
    return { result };
  }

  @Post('subtract')
  subtract(@Body() { operand1, operand2 }: BaseCalculatorDto): {
    result: number;
  } {
    const result = this.calculatorService.subtract(operand1, operand2);
    return { result };
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { MathService } from './math.service';
import { BaseMathDto } from './dto/math.dto';

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @Post('add')
  add(@Body() { operand1, operand2 }: BaseMathDto): { result: number } {
    const result = this.mathService.add(operand1, operand2);
    return { result };
  }

  @Post('subtract')
  subtract(@Body() { operand1, operand2 }: BaseMathDto): { result: number } {
    const result = this.mathService.subtract(operand1, operand2);
    return { result };
  }
}

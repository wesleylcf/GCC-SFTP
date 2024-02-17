import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class BaseCalculatorDto {
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  operand1: number;

  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  operand2: number;
}

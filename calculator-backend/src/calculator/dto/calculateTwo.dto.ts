import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class CalculateTwoDto {
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  operand1: number;

  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  operand2: number;
}

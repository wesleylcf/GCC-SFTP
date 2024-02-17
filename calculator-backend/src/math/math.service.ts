import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  add(...operands: number[]) {
    return operands.reduce((result, operand) => result + operand, 0);
  }

  subtract(...operands: number[]) {
    const [initialValue, ...restOfOperands] = operands;
    return restOfOperands.reduce(
      (result, operand) => result - operand,
      initialValue,
    );
  }
}

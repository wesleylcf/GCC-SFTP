import axios from "axios";
import { BaseMathResponse } from ".";

export class MathApi {
  static async add(operand1: number, operand2: number) {
    const response = await axios.post<BaseMathResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/math/add`,
      {
        operand1,
        operand2,
      }
    );
    return response.data.result;
  }

  static async subtract(operand1: number, operand2: number) {
    const response = await axios.post<BaseMathResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/math/subtract`,
      {
        operand1,
        operand2,
      }
    );
    return response.data.result;
  }
}

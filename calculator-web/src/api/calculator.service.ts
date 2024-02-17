import axios from "axios";
import { BaseCalculatorResponse } from ".";

export class CalculatorApi {
  static async add(operand1: number, operand2: number) {
    const response = await axios.post<BaseCalculatorResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/math/add`,
      {
        operand1,
        operand2,
      }
    );
    return response.data.result;
  }

  static async subtract(operand1: number, operand2: number) {
    const response = await axios.post<BaseCalculatorResponse>(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/math/subtract`,
      {
        operand1,
        operand2,
      }
    );
    return response.data.result;
  }
}

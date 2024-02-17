import axios from "axios";
import { BaseMathResponse } from ".";

export class MathApi {
  static async add(operand1: number, operand2: number) {
    const response = await axios.post<BaseMathResponse>(
      "http://localhost:3001/math/add",
      {
        operand1,
        operand2,
      }
    );
    return response.data.result;
  }

  static async subtract(operand1: number, operand2: number) {
    const response = await axios.post<BaseMathResponse>(
      "http://localhost:3001/math/subtract",
      {
        operand1,
        operand2,
      }
    );
    return response.data.result;
  }
}

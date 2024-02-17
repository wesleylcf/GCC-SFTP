import axios from "axios";
import { BaseCalculatorResponse } from ".";
import { BaseApiService } from "./base.service";

export class CalculatorApiService extends BaseApiService {
  async add(operand1: number, operand2: number) {
    const response = await axios.post<BaseCalculatorResponse>(
      `${this.apiUrl}/math/add`,
      {
        operand1,
        operand2,
      }
    );
    return response.data.result;
  }

  async subtract(operand1: number, operand2: number) {
    const response = await axios.post<BaseCalculatorResponse>(
      `${this.apiUrl}/math/subtract`,
      {
        operand1,
        operand2,
      }
    );
    return response.data.result;
  }
}

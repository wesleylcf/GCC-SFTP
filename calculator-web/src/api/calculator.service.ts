import { BaseCalculatorResponse } from ".";
import { BaseApiService } from "./base.service";

export class CalculatorApiService extends BaseApiService {
  constructor(apiUrl: string) {
    super(apiUrl + "/calculate");
  }

  /**
   * Adds two numeric operands
   * @param operand1 first number
   * @param operand2 second number
   */
  async addTwo(operand1: number, operand2: number) {
    try {
      const data = await this.post<BaseCalculatorResponse>(
        "addTwo",
        { operand1, operand2 },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return data.result;
    } catch (e) {
      // Application/business specific error processing
      throw e;
    }
  }

  /**
   * Subtracts operand2 from operand1. Order of operands matters.
   * @param operand1 first number
   * @param operand2 second number
   */
  async subtractTwo(operand1: number, operand2: number) {
    try {
      const data = await this.post<BaseCalculatorResponse>(
        "subtractTwo",
        { operand1, operand2 },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return data.result;
    } catch (e) {
      // Application/business specific error processing if necessary
      throw e;
    }
  }
}

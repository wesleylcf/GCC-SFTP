import axios from "axios";
import { BaseCalculatorResponse } from ".";
import { BaseApiService } from "./base.service";

export class CalculatorApiService extends BaseApiService {
  constructor(apiUrl: string) {
    super(apiUrl + "/calculate");
  }
  async add(operand1: number, operand2: number) {
    try {
      const data = await this.post<BaseCalculatorResponse>(
        "add",
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

  async subtract(operand1: number, operand2: number) {
    try {
      const data = await this.post<BaseCalculatorResponse>(
        "subtract",
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

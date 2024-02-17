export * from "./calculator.types";
import { CalculatorApiService } from "./calculator.service";

export const ApiService = {
  calculator: new CalculatorApiService(
    process.env.NEXT_PUBLIC_SERVER_BASE_URL!
  ),
};

"use client";

import { ApiService } from "@/api";
import { Button, Form, InputNumber, Spin } from "antd";
import { useState } from "react";

interface FormState {
  operand1: number | null;
  operand2: number | null;
}

const defaultFormState: FormState = { operand1: 0, operand2: 0 };
type Operat = keyof typeof ApiService.calculator;

export default function App() {
  const [result, setResult] = useState(0);
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onAdd = async () => {
    await executeCalculation((op1, op2) =>
      ApiService.calculator.addTwo(op1, op2)
    );
  };

  const onSubtract = async () => {
    await executeCalculation((op1, op2) =>
      ApiService.calculator.subtractTwo(op1, op2)
    );
  };

  const executeCalculation = async (
    calculation: (a: number, b: number) => Promise<any>
  ) => {
    setIsLoading(true);
    const { operand1: _operand1, operand2: _operand2 } = form.getFieldsValue();
    const operand1 = _operand1 ?? 0;
    const operand2 = _operand2 ?? 0;
    const result = await calculation(operand1, operand2);
    setResult(result);
    setTimeout(() => setIsLoading(false), 200);
  };

  return (
    <main>
      <Form
        form={form}
        className="flex min-h-screen flex-col items-center justify-center"
        initialValues={defaultFormState}
      >
        <Form.Item name="operand1">
          <InputNumber addonBefore="Operand 1" />
        </Form.Item>
        <Form.Item name="operand2">
          <InputNumber addonBefore="Operand 2" />
        </Form.Item>
        <div className="flex flex-row space-x-4">
          <Form.Item>
            <Button htmlType="submit" onClick={onAdd} disabled={isLoading}>
              Add
            </Button>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" onClick={onSubtract} disabled={isLoading}>
              Subtract
            </Button>
          </Form.Item>
        </div>
        <p>Result: {isLoading ? <Spin size="small" /> : result}</p>
      </Form>
    </main>
  );
}

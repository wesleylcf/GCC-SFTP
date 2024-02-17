"use client";

import { MathApi } from "@/api";
import { Button, Form, InputNumber } from "antd";
import { useState } from "react";

interface FormState {
  operand1: number | null;
  operand2: number | null;
}

const defaultFormState: FormState = { operand1: 0, operand2: 0 };

export default function App() {
  const [result, setResult] = useState(0);
  const [form] = Form.useForm();

  const onAdd = async () => {
    const { operand1: _operand1, operand2: _operand2 } = form.getFieldsValue();
    const operand1 = _operand1 ?? 0;
    const operand2 = _operand2 ?? 0;
    const result = await MathApi.add(operand1, operand2);
    setResult(result);
  };

  const onSubtract = async () => {
    const { operand1: _operand1, operand2: _operand2 } = form.getFieldsValue();
    const operand1 = _operand1 ?? 0;
    const operand2 = _operand2 ?? 0;
    const result = await MathApi.subtract(operand1, operand2);
    setResult(result);
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
            <Button htmlType="submit" onClick={onAdd}>
              Add
            </Button>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" onClick={onSubtract}>
              Subtract
            </Button>
          </Form.Item>
        </div>
        <p>Result: {result}</p>
      </Form>
    </main>
  );
}

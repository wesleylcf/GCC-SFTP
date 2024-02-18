import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CalculatorModule } from '../src/calculator/calculator.module';

describe('CalculatorController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CalculatorModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  const mockRequestBody = {
    operand1: 1,
    operand2: 1,
  };

  it('(POST) /calculate/addTwo', () => {
    return request(app.getHttpServer())
      .post('/calculate/addTwo')
      .send(mockRequestBody)
      .then((res) => {
        expect(res.statusCode === HttpStatus.OK);
        expect(res.body).toEqual({ result: 2 });
      });
  });

  it('(POST) /calculate/subtractTwo', () => {
    return request(app.getHttpServer())
      .post('/calculate/subtractTwo')
      .send(mockRequestBody)
      .then((res) => {
        expect(res.statusCode === HttpStatus.OK);
        expect(res.body).toEqual({ result: 0 });
      });
  });
});

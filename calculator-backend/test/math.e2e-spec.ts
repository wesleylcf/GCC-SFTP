import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MathModule } from '../src/math/math.module';

describe('MathController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MathModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  const mockRequestBody = {
    operand1: 1,
    operand2: 1,
  };

  it('(POST) /math/add', () => {
    return request(app.getHttpServer())
      .post('/math/add')
      .send(mockRequestBody)
      .then((res) => {
        expect(res.statusCode === HttpStatus.OK);
        expect(res.body).toEqual({ result: 2 });
      });
  });

  it('(POST) /math/subtract', () => {
    return request(app.getHttpServer())
      .post('/math/subtract')
      .send(mockRequestBody)
      .then((res) => {
        expect(res.statusCode === HttpStatus.OK);
        expect(res.body).toEqual({ result: 0 });
      });
  });
});

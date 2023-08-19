import { Injectable } from '@nestjs/common';
import { ITestService } from '../../../interfaces/ITestService';
import * as k6 from 'k6';
import http from 'k6/http';
import config from '../../../../config';
import { TestConfig } from '../entities/test-config.entity';

export let options = {
  thresholds: {
    http_req_duration: ['p(95)<500', 'p(99)<1000'],
    http_req_failed: ['rate<0.01'],
    http_reqs: ['rate>100'],
  },
  stages: [
    { duration: '1m', target: 50 },
    { duration: '3m', target: 100 },
    { duration: '1m', target: 0 },
  ],
};

const endpoints = [
  '/endpoint1',
  '/endpoint2',
  '/endpoint3',
  '/endpoint4',
  '/endpoint5',
  '/endpoint6',
  '/endpoint7',
  '/endpoint8',
  '/endpoint9',
  '/endpoint10',
];

@Injectable()
export class TestService {}

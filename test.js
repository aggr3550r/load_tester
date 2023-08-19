import { group, sleep } from 'k6';
import http from 'k6/http';
import { check } from 'k6';

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

const responseTimes = [];
const virtualUserCounts = [];

export default function () {
  // Randomly select an endpoint to test
  const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];

  group('Test Group', function () {
    // Make a request to the selected endpoint
    const response = http.get(`https://example.com${endpoint}`);

    // Check if the response status is 200
    check(response, {
      'Status is 200': (r) => r.status === 200,
    });
  });

  const responseTime = response.timings.duration;
  const virtualUserCount = __VU;

  responseTimes.push(responseTime);
  virtualUserCounts.push(virtualUserCount);

  console.log(
    `Endpoint: ${endpoint}, Response Time: ${responseTime} ms, Virtual Users: ${virtualUsers}, Iteration: ${iteration}`,
  );

  // Introduce some sleep between requests
  sleep(1); // 1 second
}

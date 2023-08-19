export default {
  baseURL: 'https://example.com',
  duration: '5m', // Duration of the test
  vus: 50, // Number of virtual users
  thresholds: {
    // Set custom response time thresholds for various percentiles
    http_req_duration: ['p(95)<500', 'p(99)<1000'],
    // Set thresholds for error rate and throughput
    http_req_failed: ['rate<0.01'], // 1% of requests or less can fail
    http_reqs: ['rate>100'], // Target a minimum throughput of 100 requests per second
  },
  ext: {
    // Configure k6's modules
    loadimpact: {
      projectID: 1234567, // Your LoadImpact project ID
      name: 'My Load Test', // Name for the test in LoadImpact
    },
  },
  stages: [
    { duration: '1m', target: 50 }, // Ramp-up: 1 minute, 50 VUs
    { duration: '3m', target: 100 }, // Sustained load: 3 minutes, 100 VUs
    { duration: '1m', target: 0 }, // Ramp-down: 1 minute, 0 VUs
  ],
};

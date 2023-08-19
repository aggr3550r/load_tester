import { group, sleep } from 'k6';
import http from 'k6/http';
import { check } from 'k6';

const dotenv = require('dotenv');
dotenv.config();

const mailjetEmail = require('node-mailjet').apiConnect(
  process.env.MAILJET_KEY1,
  process.env.MAILJET_KEY2,
);

class EmailTemplateConfig {
  user_name;
  user_email;
  subject;
  variables;

  constructor(user_name, user_email, subject, variables) {
    this.user_name = user_name;
    this.user_email = user_email;
    this.subject = subject;
    this.variables = variables;
  }
}

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

export default async function () {
  // Configure essential variables for email template
  const emailConfig = new EmailTemplateConfig();

  // Send Test Begin Notification
  sendTestBeginNotification();

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

  // Check if the current iteration is the last iteration
  if (__ITER === options.stages[options.stages.length - 1].iterations - 1) {
    // Process response times array when the last iteration is reached
    processResult();
  }
}

async function processResult() {
  sendTestEndNotification();
}

function getMailJetMessageTransTemplate(user, subject, templateID, variables) {
  return [
    {
      From: {
        Email: 'support@earn-relai.com',
        Name: 'EarnRelai',
      },
      To: [
        {
          Email: user.data.email,
          Name: user.data.name,
        },
      ],
      Subject: subject,
      TemplateID: templateID,
      TemplateLanguage: true,
      Variables: { ...variables },
    },
  ];
}

async function sendEmail(user, subject, templateID, variables) {
  try {
    const request = await mailjetEmail
      .post('send', { version: 'v3.1' })
      .request({
        Messages: getMailJetMessageTransTemplate(
          { name: user.name, email: user.email },
          subject,
          templateID,
          variables,
        ),
      });

    console.log('Email sent', request.body);
  } catch (e) {
    console.log('An error occurred while trying to send this email', e);
  }
}

async function sendTestBeginNotification(user, subject, templateID, variables) {
  templateID = 100;
  subject = 'Strap In, Your Test is Starting...';
  variables = {};
  await sendEmail(user, subject, templateID, variables);
}

async function sendTestEndNotification(user, subject, templateID, variables) {
  templateID = 200;
  subject = 'Test Results';
  variables = {};
  await sendEmail(user, subject, templateID, variables);
}
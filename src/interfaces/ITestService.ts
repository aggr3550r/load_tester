export interface ITestService {
  // consolidateTestConfig(): Promise<void>;
  setupTest(): Promise<void>;
  performTest(): Promise<void>;
  getTestResult(): Promise<any>;
  getTestAnalysis(): Promise<any>;
  forwardTestToEmail(email: string): Promise<void>;
}

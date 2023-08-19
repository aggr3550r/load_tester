export type TestOption = {
  baseUrl: string;
  vus: number;
  duration: string;
  stage?: TestStage;
  thresholds: Record<any, any>;
  ext: Record<any, any>;
};

type TestStage = {
  duration: string;
  target: number;
};

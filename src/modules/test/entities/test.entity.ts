import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseModel } from '../../../models/BaseModel';
import { TestConfig } from './test-config.entity';
import { TestResult } from './test-result.entity';
import { TestAnalysis } from './test-analysis.entity';

@Entity('test')
export class Test extends BaseModel {
  @OneToOne(() => TestConfig)
  @JoinColumn()
  test_config: TestConfig;

  @OneToOne(() => TestResult)
  @JoinColumn()
  test_result: TestResult;

  @OneToOne(() => TestAnalysis)
  @JoinColumn()
  test_analysis: TestAnalysis;
}

import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseModel } from '../../../models/BaseModel';
import { User } from '../../user/entities/user.entity';
import { TestConfig } from './test-config.entity';
import { TestResult } from './test-result.entity';
import { TestAnalysis } from './test-analysis.entity';

@Entity('test')
export class Test extends BaseModel {
  @Column({ nullable: true })
  name: string;

  @ManyToOne(() => User, (owner) => owner.tests)
  owner: User;

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

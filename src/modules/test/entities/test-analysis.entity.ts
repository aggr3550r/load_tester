import { Entity } from 'typeorm';
import { BaseModel } from '../../../models/BaseModel';
import { Test } from './test.entity';

@Entity('test-analysis')
export class TestAnalysis extends BaseModel {
  test: Test;
}

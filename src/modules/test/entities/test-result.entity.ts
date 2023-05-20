import { Entity } from 'typeorm';
import { BaseModel } from '../../../models/BaseModel';
import { Test } from './test.entity';

@Entity('test-result')
export class TestResult extends BaseModel {
  test: Test;
}

import { Entity } from 'typeorm';
import { BaseModel } from '../../../models/BaseModel';
import { Test } from './test.entity';

@Entity('test-config')
export class TestConfig extends BaseModel {
  test: Test;
}

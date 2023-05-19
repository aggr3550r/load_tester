import { Entity } from 'typeorm';
import { BaseModel } from '../../../models/BaseModel';

@Entity('test-result')
export class TestResult extends BaseModel {}

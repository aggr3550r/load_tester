import { Entity } from 'typeorm';
import { BaseModel } from '../../../models/BaseModel';

@Entity('test-analysis')
export class TestAnalysis extends BaseModel {}

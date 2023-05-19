import { Entity } from 'typeorm';
import { BaseModel } from '../../../models/BaseModel';

@Entity('test-config')
export class TestConfig extends BaseModel {}

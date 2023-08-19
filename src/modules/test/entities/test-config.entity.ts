import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../models/BaseModel';
import { Test } from './test.entity';
import { TestConfigDTO } from '../dtos/test-config.dto';

@Entity('test-config')
export class TestConfig extends BaseModel {
  @Column({ nullable: false, type: 'jsonb' })
  config: TestConfigDTO;
}

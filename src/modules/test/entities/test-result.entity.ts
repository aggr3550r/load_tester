import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../models/BaseModel';

@Entity('test-result')
export class TestResult extends BaseModel {
  @Column({ nullable: true, type: 'jsonb' })
  response_times: [];
  @Column({ nullable: true, type: 'jsonb' })
  points_in_time: [];
}

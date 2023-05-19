import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../models/BaseModel';
import { User } from '../../user/entities/user.entity';

@Entity('test')
export class Test extends BaseModel {
  @Column({ nullable: true, type: 'string' })
  name: string;

  @ManyToOne(() => User, (owner) => owner.tests)
  owner: User;
}

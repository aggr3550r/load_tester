import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../models/BaseModel';
import { Test } from '../../test/entities/test.entity';

@Entity('user')
export class User extends BaseModel {
  @Column({ nullable: false, type: 'text' })
  email_address: string;

  @Column({ nullable: false })
  password: string;

  @OneToMany(() => Test, (test) => test.owner)
  tests: Test[];
}

import { Entity } from 'typeorm';
import { BaseModel } from '../../../models/BaseModel';

@Entity('target-server')
export class TargetServer extends BaseModel {}

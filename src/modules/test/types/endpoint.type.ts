import { HttpMethod } from '../../../enums/http-method.enum';

export type Endpoint = {
  url: string;
  method: HttpMethod;
  data: Record<any, any>;
};

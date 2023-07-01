import { DNS } from './DNS';

export interface OneEmailRes {
  email: string;
  domain: string;
  format: boolean;
  dns: DNS;
}

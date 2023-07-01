export interface DNS {
  mx: MX;
  spf: SPF;
  dmarc: DMARC;
}

export interface MX {
  status: boolean;
  records: { Host: string; Pref: number }[];
}

export interface SPF {
  status: boolean;
  record: string;
}

export interface DMARC {
  status: boolean;
  record: string;
}

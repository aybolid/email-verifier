export interface VerifierResponse {
  domains_checked: string[] | null;
  results: VerifierResult[] | null;
  message?: string;
}

export interface VerifierResult {
  domain: string;
  is_ok: boolean;
  has: {
    mx: boolean;
    spf: boolean;
    dmarc: boolean;
  };
  records: {
    dmarc: string;
    spf: string;
  };
}

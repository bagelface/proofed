export interface Claim {
  providerId: string;
  field: string;
  operator: "gt" | "lt" | "eq" | "since" | "bool";
  threshold?: number | string | boolean;
  statement: string;
}

export interface ProofedCredential {
  "@context": string[];
  type: string[];
  issuer: string;
  validFrom: string;
  validUntil: string;
  credentialSubject: { id: string; claims: Claim[] };
  credentialStatus?: { type: "BitstringStatusListEntry"; statusListIndex: string; statusListCredential: string };
  proof?: unknown;
}

export type VerificationResult = "valid" | "expired" | "revoked" | "invalid";

export function checkExpiry(credential: ProofedCredential, now = new Date()): VerificationResult {
  return new Date(credential.validUntil) < now ? "expired" : "valid";
}

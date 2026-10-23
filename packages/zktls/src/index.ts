export interface Attestation {
  providerId: string;
  attestorId: string;
  attestorSignature: string;
  sessionHash: string;
  capturedAt: string;
  fields: Record<string, unknown>;
}

// Keeps attestor choice swappable so no single zkTLS vendor becomes a trust dependency.
export interface ZkTlsProvider {
  name: string;
  capture(providerId: string): Promise<Attestation>;
}

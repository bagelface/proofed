export type ClaimOperator = "gt" | "lt" | "eq" | "since" | "bool";

export interface ProviderField {
  id: string;
  label: string;
  type: "number" | "date" | "boolean" | "string";
}

export interface Provider {
  id: string;
  platform: string;
  version: number;
  loginUrl: string;
  dataEndpoint: string;
  fields: ProviderField[];
  allowedClaims: Record<string, ClaimOperator[]>;
}

export const providers: Provider[] = [];

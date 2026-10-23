# Proofed spec

Product invariants that every component must uphold.

## Invariants

- Raw platform data never leaves the holder's device.
- The server stores only ciphertext; the decryption key travels in the share link's URL fragment.
- Claims are thresholds by default; ratings are always optional.
- Every credential expires.
- A provider whose platform response no longer matches its schema fails closed.
- The verifier page cannot request more than the holder shared.

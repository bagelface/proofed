# Proofed

Turn existing platform work history into a verifiable, privacy-preserving credential.
A holder proves chosen facts, such as "over 5,000 completed trips on Bolt", and reveals nothing else.
An employer checks the credential from a link, with no account or install.

See [docs/spec.md](docs/spec.md) for product invariants.

## Layout

| Path | What |
| --- | --- |
| `apps/holder` | Holder PWA: platform login, claim picker, prover, local credential store |
| `apps/verifier` | Verifier page: checks a shared presentation in the browser |
| `apps/share` | Share service (Cloudflare Worker + R2): stores ciphertext and revocation status lists |
| `apps/site` | Landing page (Astro, static) |
| `packages/credential` | W3C VC encoding, selective disclosure, verification |
| `packages/providers` | Versioned platform provider schemas |
| `packages/zktls` | zkTLS provider interface and adapters |
| `packages/circuits` | Stacks savings circle membership circuit |
| `packages/ui` | Shared components and brand tokens |

## Develop

```sh
pnpm install
pnpm dev        # all apps
pnpm build
pnpm typecheck
```

Requires Node 22+ and pnpm 9.

## License

[Apache-2.0](LICENSE)

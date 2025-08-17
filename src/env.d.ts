// Minimal environment typing to avoid referencing adapter-specific types in this repo.
type Env = Record<string, unknown>;

declare namespace App {
  interface Locals {}
}

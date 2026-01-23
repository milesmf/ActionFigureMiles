# Operating Rules

## Prime Directive

Follow the project design system all times.
Never introduce off-brand UI, spacing, color, or layout.

## Scope Control (default)

Assume global product, design, and architectural context from this CLAUDE.md.

By default:

- Limit edits to files explicitly mentioned in the prompt
- Do not scan unrelated routes or directories
- Do not load large reference files unless requested

If broader context is required, ask first or wait for explicit permission.

## Ignore the following (hard constraint)

Claude MUST NOT read, scan, summarize, or load these paths unless explicitly instructed:

- node_modules/
- build/
- repomix-output.txt

## Working rules

- Preserve existing patterns
- No speculative refactors
- Match brand hero + card-based aesthetic

## Knowledgebase Priority Order

1. This CLAUDE.md (always authoritative)

### Layout hierarchy

- HERO + CTA → CONTENT w/ INFORMATION [multiple chunks] → FOOTER + CTA + DIALOG SPAWN
- One main idea per section
- Use real artifacts/screenshots over decoration

### Visual rules

- Rounded corners on larger elements
- max-w-6xl containers
- 64–80px vertical section padding
- Cards: rounded-xl/2xl, subtle shadow
- Font: Varela Round
- Heading Text: Bubblebody New
- Website background: #F5EEE0
- Primary color: Red: #ef3e36

### Copy rules

- Confident, outcome-oriented
- Assume curiosity, not ignorance
- Let visuals and structure do most of the work

All language should feel like an invitation into a secret portal rather than onboarding or marketing. Avoid technical jargon and feature lists. Focus on outcomes: ownership, identity, access, and exclusivity. Use verbs like activate, unlock, access, and discover. The copy should make users feel early, special, and excited — as if scanning the QR code led them somewhere not everyone gets to go.

ALWAYS IGNORE 'repomix' files.

Done.

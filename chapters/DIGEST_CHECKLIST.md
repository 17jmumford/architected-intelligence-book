# Chapter digest — author checklist

Use this for every new chapter digest page in [`chapters/`](.). Source manuscript lives under `book/` (gitignored); published site files stay here.

## Fields (fixed order on the page)

1. **Metadata** — Component number + name, book chapter number + title (match the manuscript `Chapter N:` line).
2. **Core ideas** — **5–10** bullets. Atomic, scannable. Prefer named frameworks, tenets, and decisions over stories.
3. **Principles** — Bulleted list. **Start from** the end-of-manuscript block `Architected Intelligence Principles of Chapter N` when it exists. **Add** any strong standalone `Architected Intelligence Principle:` lines that are not redundant. **Dedupe**: if two lines differ only in wording, keep one.
4. **Read the chapter for…** — **Exactly one sentence** on what the full chapter adds (stories, extended examples, tables, nuance).

## Three-pass workflow (fits small context windows)

1. **Skim** — Search the file for: `Architected Intelligence Principle`, `Figure`, `Principles of Chapter`, and section headers.
2. **Strategic read** — Opening ~100 lines, each major section title, and the closing principle block.
3. **Fill-in** — Only sections where bullets still feel incomplete.

## Style

- Educational hub tone: this is a **map**, not a replacement for the book.
- Do not paste long quotes or multi-paragraph case writeups in “light” digests.

## URL scheme

- Slug files: `chapters/ch##-short-slug.html` (chapter number from the book, two digits). Observability: `ch09-engineering-observability.html`, `ch10-data-science-observability.html`.
- Component intros (no chapter number): `component-1-output.html` through `component-5-enablement.html` in `chapters/`.

## Naming consistency (cross-chapter)

- **SeaS**: Service as a Software (same idea as “Service as Software” in prose—pick one spelling in lists).
- **Intelligence–Cost–Latency**: hyphenated triangle; same meaning as “cost, latency, and intelligence” on the home page.
- **Four I’s**: Initiate, Inspect, Improve, Implement (always in that order).
- **Knowledge Transformation Cycle**: capitalize when referring to the framework; **Collect / Connect / Curate** for Input phases.
- **Canon**, **Segment**, **Well-Retrieved / Well-Sourced / Well-Informed**: pyramid layer names as in Chapter 6.

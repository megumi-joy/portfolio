# PROJECT CONSTITUTION — Megumi Joy Portfolio

> **Read this first. This is the source of truth.**
> Two longer briefs accompany this Constitution and contain implementation details (architecture, lobby specs, surgical fixes). In case of conflict between documents:
> **Constitution > brief_correcciones > brief_portfolio_anton_megumi_joy**

---

## 0. Mission

Rebuild Anton's portfolio (`megumi-joy.github.io/portfolio`) from a CV-style technical résumé into a **conversion-focused hub + 3 audience-specific lobbies**, primarily targeting **business owners and CEOs evaluating Anton as their tech partner for automation, AI integration, and custom software**.

**Single conversion goal:** visitor → WhatsApp message to Anton at `+34 605 74 80 52`.

---

## 1. Stack & non-negotiables

- **Framework:** Vite + React (current). Maintain.
- **Routing:** `react-router-dom` v6+. Install if missing.
- **Styling:** preserve current CSS approach. Add CSS custom properties for per-lobby theming via `data-lobby` attribute.
- **i18n:** the existing 5-language system (EN, ES, RU, UK, CA) is **untouchable in its structure**. Only ADD new translation keys to existing translation files. Do NOT refactor the i18n system.
- **Meta tags:** add `react-helmet-async`.
- **State:** React built-ins only (useState, useContext). No Redux/Zustand needed.
- **Animations:** CSS or Framer Motion. Always respect `prefers-reduced-motion`.

---

## 2. Code conventions

- All code, variable names, comments, commit messages: **English**.
- All user-facing copy: **Spanish (primary)**, then translated to other 4 languages via i18n.
- Components: PascalCase functional components with hooks.
- Match the project's existing file naming convention.
- No Spanish in code identifiers. Ever.

---

## 3. Brand

- **Megumi Joy** is the studio. **Anton** is the founder and technical architect. Frame consistently across all surfaces.
- **Studio tagline (ES, primary):** *"Ingeniería de sistemas que trabajan por ti."*
- **Brand voice (Spanish):** direct, peer-level, no buzzwords, no exclamation marks, active verbs, concrete results, frases máx 20 palabras en heros.
- **Banned vocabulary:** "transformamos vidas", "soluciones innovadoras", "revolucionario", "next-gen", "disruptivo", "sinergia", "best-in-class".

---

## 4. Routing architecture

```
/              → Hub (entry router with 3 doors)
/empresas      → Lobby A: Business owners (PRIMARY — highest investment)
/voicey        → Lobby B: Voicey product (pre-alpha)
/games         → Lobby C: Game Dev / Investors
/sobre         → About Anton & Megumi Joy
```

**Legacy persona routes** (Senior, GameDev, Frontend, Backend, Embedded): **archive to `/src/_archive/legacy-personas/`** and remove from public routing.

---

## 5. Design system

### Base (all lobbies share)
- **Theme:** dark (preserve current aesthetic — glassmorphic-friendly).
- **Typography:**
  - Display: existing or `Space Grotesk` / `Satoshi` / `Inter Tight` (weights 500-700)
  - Body: existing or `Inter` / `Manrope` (weights 400-500)
  - Mono: `JetBrains Mono` for numbers, badges, technical tags
- **Spacing:** 8px base unit.
- **Radius:** cards 12-16px, buttons 8px.
- **Max content width:** 1140-1200px. Body line length: 65-75 chars.

### Per-lobby accent (scoped via `data-lobby`)
```css
[data-lobby="empresas"] { --accent: #C9A961; --accent-soft: rgba(201,169,97,0.12); }
[data-lobby="voicey"]   { --accent: #7B5BFF; --accent-soft: rgba(123,91,255,0.12); }
[data-lobby="games"]    { --accent: #10B981; --accent-soft: rgba(16,185,129,0.12); }
```

**Rule:** accent visible in max 5-8% of the visible area. Never the dominant color. Used for: highlighted keywords in headlines, icons, hover glows, primary CTA backgrounds.

---

## 6. Conversion mechanics

### WhatsApp number
`+34 605 74 80 52` → base URL `https://wa.me/34605748052`

### Prefill format
Every CTA constructs a contextual prefill:
```
Hola Anton, vengo de [lobby/section]. [Intent or question].
```
URL-encode the message (`encodeURIComponent`) when building the `href`.

### Prefill catalog (use exactly these)

| Context | Prefill text (before URL-encoding) |
|---|---|
| Hub general | `Hola Anton, vengo de tu portfolio. Quiero saber más.` |
| Empresas — custom project | `Hola Anton, vengo de tu portfolio. Tengo un negocio en [sector] y quiero explorar cómo podríamos automatizar [proceso]. ¿Tienes 15 min esta semana?` |
| Empresas — audit | `Hola Anton, me interesa una auditoría estratégica de mi operación. ¿Cómo funciona?` |
| Empresas — pain point card | `Hola Anton, tengo este problema en mi negocio: [describir]. ¿Puedes ayudarme?` |
| ABAF product | `Hola Anton, me interesa ABAF. Quiero saber pricing y cómo empezar.` |
| Voicey early access | `Hola Anton, quiero acceso anticipado a Voicey. Mi caso de uso: [describir].` |
| Voicey pricing | `Hola Anton, me interesa Voicey a nivel [individual/equipo/empresa]. Háblame de pricing.` |
| Games — pitch deck | `Hola Anton, vengo del portfolio. Me interesa tu trabajo en game dev. ¿Puedes enviarme pitch deck?` |
| Games — collaboration | `Hola Anton, me interesa colaborar o invertir en alguno de tus proyectos. Hablemos.` |

### CTA placement rules
- **Sticky floating button:** all pages. Mobile: always visible. Desktop: appears after 30% scroll.
- **Hero:** primary + secondary CTA.
- **End of each major section:** 1 contextual CTA.
- **End of page:** 1 large CTA.

### Tracking (lightweight)
On every WhatsApp click, emit:
```js
console.log({
  event: 'whatsapp_click',
  trackingId,
  lobby,
  position,
  language
});
```
Design `<WhatsAppCTA>` to accept a future analytics provider (Plausible/PostHog) without refactor.

---

## 7. Content rules

- **No stock photos. Ever.** Use project screenshots, custom illustrations, or nothing.
- **Don't invent testimonials, client logos, or metrics.** If data is missing, use the alternative credibility block (Section 8).
- **Skills in business lobby = outcomes, not tech.** Say "automate internal processes", not "FastAPI + gRPC". Tech jargon lives in `/sobre` only.
- **Sea Hunter Chinese text** must be removed from all non-Chinese language versions and rewritten per language.
- **Projects to remove from public portfolio:** "Glassmorphic UI Engine", "EduStableCoin Conceptual Fintech Architecture", "Dynamic Telemetry Dashboard" (move to `/sobre` as technical references at most).

---

## 8. Credibility block (use this exact structure)

This block appears in `/empresas` after the hero, and in a condensed form on the Hub.

**Four pillars. Each: a number + a one-line story.**

| Number | Pillar | Story line |
|---|---|---|
| `+10` | AÑOS EN PRODUCCIÓN | De firmware médico en C++ a sistemas IA en producción. |
| `2` | PRODUCTOS PROPIOS EN MERCADO | Voicey (asistente IA) y ABAF (generación de leads B2B). |
| `5` | DOMINIOS TÉCNICOS COMPLETOS | Web · móvil · hardware · simulación 3D · IA. |
| `0` | INTERMEDIARIOS | Hablas directamente con el ingeniero que construye tu sistema. |

Visual treatment: numbers in **64-96px display weight**, label in **uppercase caption** (12-14px tracked), story line in body text. Each pillar in its own card or column. Layout: 4 columns desktop, 2x2 mobile.

---

## 9. When you don't have data — ASK ANTON

Before writing placeholder content for any of these, **pause and ask the user (Maximus) to relay to Anton**:

- Real pricing for the 3 service modalities.
- Real metrics for the Megumi Massage case (hours saved, % efficiency, etc.).
- Photo of Anton (URL or upload).
- Confirmation of the risk-reversal commitments.
- Voicey pricing tiers (even approximate).
- Game dev project visuals (screenshots, renders, video).
- Status of any project listed for investor outreach.

**If Anton cannot be reached during execution**, use the placeholders in Section 10 and add a `TODO_ANTON_CONFIRM` comment in the relevant component.

---

## 10. Placeholder values (use only if real data unavailable)

| Data | Placeholder |
|---|---|
| Auditoría estratégica price | "Desde 900€" |
| Automatización puntual price | "Desde 3.500€" |
| Sistema operativo completo price | "Desde 15.000€" |
| Megumi Massage metrics | "Operación 100% digitalizada · Decisiones en tiempo real · Equipo trabajando sobre un sistema único" *(no fabricated numbers)* |
| Anton photo | Neutral placeholder with initials "A" — implement with `<Avatar />` component that gracefully accepts a real image later |
| Voicey pricing | "Pricing por consumo, similar a los principales LLM del mercado. Hablemos de tu caso para concretar tier." |
| Voicey state | "Pre-alpha · Acceso por invitación" |
| Game dev hero visual | Use abstract geometric animation in lobby accent color until Anton provides real renders |

---

## 11. Acceptance criteria for the project

A reasonable visitor (CEO or business owner) lands on `/empresas` and **within 30 seconds**:
- Understands what Megumi Joy / Anton does.
- Sees at least 2 concrete examples of past work in business terms.
- Knows the rough investment range.
- Has 3+ visible ways to contact via WhatsApp.

Plus:
- **Lighthouse:** Performance ≥ 85, Accessibility ≥ 90, SEO ≥ 95.
- All 5 languages work; no Chinese leaks in non-Chinese versions.
- No console errors.
- Mobile UX equally usable.
- `prefers-reduced-motion` honored everywhere.

---

## 12. Reference documents

1. **brief_portfolio_anton_megumi_joy.md** — full architecture and lobby specifications.
2. **brief_correcciones_portfolio_anton.md** — surgical fixes for 7 diagnosed problems (credibility block, pricing transparency, copy rewrites, etc.).

When implementation detail isn't in this Constitution, consult these. When they conflict with the Constitution, Constitution wins.

---

## 13. Workflow expectation

Execution happens in **phased prompts**, not in one shot. After each prompt:
1. Complete the scoped tasks.
2. Stop. Do not continue to the next phase.
3. Report what was done, screenshots if relevant, and any unresolved questions.
4. Wait for explicit "continue" before the next phase.

This is non-negotiable. Single-pass mega-execution produces lower-quality results than verified, phased work.

# EXECUTION PROMPTS — Megumi Joy Portfolio Rebuild

> 8 prompts. One day of focused execution. Maximum quality.

---

## How to use this document

1. **Pre-flight (5 min):** attach `PROJECT_CONSTITUTION.md`, `brief_portfolio_anton_megumi_joy.md`, and `brief_correcciones_portfolio_anton.md` to your Antigravity project so the agent has them as permanent context.
2. **Per prompt:** copy ONE prompt block at a time, paste into Antigravity, let it execute, verify the result, then move to the next.
3. **Do not skip phases.** Each phase depends on the previous one.
4. **If the agent asks a question about Anton-specific data**, you answer (or ping Anton). The Constitution Section 9 lists what to expect.

### Time budget (estimates)

| Phase | Estimated time |
|---|---|
| 1. Foundation | 45-60 min |
| 2. Hub (`/`) | 30-45 min |
| 3. `/empresas` (BIG) | 90-120 min |
| 4. `/voicey` | 45-60 min |
| 5. `/games` | 45-60 min |
| 6. `/sobre` + cleanup | 45 min |
| 7. SEO + i18n consistency | 45-60 min |
| 8. Final QA | 30-45 min |
| **Total** | **6-8 hours** |

---

# PHASE 1 — Foundation Setup

**What you'll get:** routing, layout, theming, and reusable conversion components ready. No lobby content yet.

**Copy from here ↓**

```
You are starting Phase 1 of 8 in the Megumi Joy portfolio rebuild. Before doing anything, confirm you have read PROJECT_CONSTITUTION.md. If not, read it now.

GOAL OF THIS PHASE
Set up routing, layout, theming, and the reusable WhatsApp conversion components. Do NOT build any lobby content. Just the foundation.

TASKS

1. Create branch `restructure/avatar-lobbies`. Work only on this branch.

2. Install dependencies if missing:
   - react-router-dom (v6+)
   - react-helmet-async

3. Set up routing in the app entry. Create these five routes, each pointing to a placeholder component containing only an <h1> with the route name for now:
   /          → <HubPage />
   /empresas  → <EmpresasPage />
   /voicey    → <VoiceyPage />
   /games     → <GamesPage />
   /sobre     → <SobrePage />

4. Build <RootLayout> that wraps all routed pages with:
   - <Navbar> at top (sticky)
   - <main> slot for page content
   - <Footer> at bottom
   - <WhatsAppFloatingButton> sticky bottom-right
   - A `data-lobby` attribute on the root element, set dynamically from the current route: "empresas", "voicey", "games", or "default" for the rest.

5. Build <Navbar>:
   - Left: a wordmark "Megumi Joy" linked to "/"
   - Center (desktop): links to /empresas, /voicey, /games, /sobre — use existing i18n keys or add new keys "nav.empresas", "nav.voicey", "nav.games", "nav.sobre" with translations in all 5 languages (ES is canonical; for others, generate sensible translations if needed but mark with TODO_TRANSLATE_REVIEW comment).
   - Right: the EXISTING language switcher (do not refactor it) + a small WhatsApp icon button (24px) that opens wa.me with the hub prefill.
   - Sticky with glassmorphic background that intensifies on scroll.
   - Mobile: hamburger drawer with the same links.

6. Build <Footer>:
   - 3 columns: brand summary (left), nav links (center), contact links (right — WhatsApp link + email placeholder + language indicator).
   - Bottom line: © year, "Megumi Joy", tagline "Ingeniería de sistemas que trabajan por ti." (translated per language).

7. Build reusable <WhatsAppCTA> component with this API:
   ```
   <WhatsAppCTA
     variant="primary" | "secondary" | "ghost" | "card"   // default "primary"
     size="sm" | "md" | "lg"                              // default "md"
     label="Hablar con Anton"                             // string, translatable
     prefill="Hola Anton, vengo de la sección X..."       // raw string, not URL-encoded
     trackingId="empresas-hero-primary"                   // string for analytics
   />
   ```
   Behavior:
   - URL-encodes prefill via encodeURIComponent.
   - Constructs `https://wa.me/34605748052?text=${encoded}`.
   - Opens in new tab with rel="noopener noreferrer".
   - On click, console.log({ event: 'whatsapp_click', trackingId, lobby, position, language }) — where `lobby` comes from the current data-lobby attribute and `language` from i18n.
   - Uses var(--accent) for "primary" variant background.

8. Build <WhatsAppFloatingButton>:
   - 56x56px mobile, 64x64px desktop.
   - Fixed bottom-right, 24px margin.
   - WhatsApp green #25D366, white icon.
   - Mobile: visible always.
   - Desktop: opacity 0 initially; opacity 1 + slide-in after 30% page scroll. Use scroll listener or IntersectionObserver.
   - Tooltip on hover: "Hablar con Anton ahora" (translated).
   - Internally uses <WhatsAppCTA> with a context-aware default prefill based on current route (from the catalog in Constitution Section 6).
   - aria-label set for accessibility.

9. Set up global theme variables in a top-level stylesheet (preserve existing design tokens; add what's missing):
   ```css
   :root {
     /* keep existing tokens */
     --accent: #C9A961;                         /* default to empresas accent */
     --accent-soft: rgba(201, 169, 97, 0.12);
   }
   [data-lobby="empresas"] { --accent: #C9A961; --accent-soft: rgba(201,169,97,0.12); }
   [data-lobby="voicey"]   { --accent: #7B5BFF; --accent-soft: rgba(123,91,255,0.12); }
   [data-lobby="games"]    { --accent: #10B981; --accent-soft: rgba(16,185,129,0.12); }
   ```

10. Wrap the app in <HelmetProvider> from react-helmet-async so pages can set <title> and meta tags later.

CONSTRAINTS
- Do NOT modify the existing i18n system structure. Only add new keys to existing translation files.
- Do NOT touch or remove the existing portfolio code from the legacy persona views in this phase — just stop linking to them publicly. We clean up in Phase 6.
- Preserve the current dark visual base.
- All code, comments, commit messages in English.
- Respect `prefers-reduced-motion`.

ACCEPTANCE CRITERIA
- All 5 new routes load without console errors.
- Navbar appears on every route, language switcher works on every route.
- WhatsApp floating button is visible on mobile, appears after scroll on desktop, opens wa.me with the correct prefill for each route.
- `data-lobby` attribute on the root layout changes correctly when navigating between lobbies (verify in DevTools).
- Lighthouse Performance on `/` still ≥ 80 (no major regression vs. the existing site).

STOP AND REPORT
Do NOT proceed to Phase 2. Report back with:
1. Confirmation that all routes load.
2. A short list of any decisions you made that aren't covered in the Constitution.
3. Any questions you have before continuing.

Wait for my "continue" before starting Phase 2.
```

**Copy until here ↑**

---

# PHASE 2 — Hub (`/`)

**What you'll get:** the home page that routes visitors to one of the 3 lobbies, with the strong credibility block.

**Copy from here ↓**

```
You are starting Phase 2 of 8. Foundation (Phase 1) is complete and approved.

GOAL OF THIS PHASE
Build the Hub at `/` — a focused entry router with three audience-specific doors plus a credibility strip. The Hub does NOT sell or list projects. It routes.

TASKS

1. Replace the placeholder <HubPage /> with the full hub layout.

2. Section A — Hero (short, ≤70vh on desktop):
   - <Helmet>: title "Megumi Joy · Sistemas que trabajan por ti", description as in Constitution.
   - H1 (canonical ES): "Construimos los sistemas que tu negocio necesita."
   - Subhead (canonical ES): "Automatización a medida, productos IA y experiencias interactivas. Por Anton, ingeniero senior con más de 10 años construyendo lo que otros aún no se imaginan."
   - Add translation keys for all 5 languages. For non-Spanish, generate sensible translations and mark with TODO_TRANSLATE_REVIEW comments.
   - No CTA in the hero. The CTA is the door selector below.

3. Section B — Door selector (the main interactive block):
   Three large cards, equal width on desktop (or center card slightly emphasized), stacked on mobile. Each card:
   - Card 1 (PRIMARY — visually emphasized, slightly larger or more saturated):
     - Eyebrow: "Para tu negocio"
     - Title: "Automatiza, escala y libera horas"
     - One line: "Sistemas a medida + productos IA listos para integrar."
     - CTA: "Ver soluciones para empresas →" → links to /empresas
   - Card 2:
     - Eyebrow: "Producto estrella"
     - Title: "Voicey"
     - One line: "Asistente IA por voz y texto, 24/7, con poder operativo real."
     - CTA: "Conocer Voicey →" → links to /voicey
   - Card 3:
     - Eyebrow: "Game dev & simulación"
     - Title: "Mundos que se sienten reales"
     - One line: "Simulación de alto rendimiento, GameDev y proyectos en busca de inversión."
     - CTA: "Ver proyectos →" → links to /games
   - On hover (desktop): subtle lift (translateY -4px) and accent glow using a card-specific accent color (Card 1: amber, Card 2: purple, Card 3: teal — even though the lobby attribute is "default" here, you can color the cards directly).
   - All copy translated to 5 languages with TODO_TRANSLATE_REVIEW where needed.

4. Section C — Credibility strip (CRITICAL — implement exactly as specified in Constitution Section 8):
   Four pillars in a horizontal strip on desktop (4 cols), 2x2 grid on mobile. Each pillar:
   - Number in 64-96px display weight (use the mono font from the design system).
   - Label in uppercase 12-14px, tracked +0.05em.
   - Story line in body text, max 2 lines, muted color.
   
   The four pillars:
   ┌─────────────────────────────┬─────────────────────────────┬─────────────────────────────┬─────────────────────────────┐
   │ +10                         │ 2                           │ 5                           │ 0                           │
   │ AÑOS EN PRODUCCIÓN          │ PRODUCTOS PROPIOS EN MERCADO│ DOMINIOS TÉCNICOS COMPLETOS │ INTERMEDIARIOS              │
   │ De firmware médico en C++   │ Voicey (asistente IA) y     │ Web · móvil · hardware ·    │ Hablas directamente con el  │
   │ a sistemas IA en producción.│ ABAF (generación de leads   │ simulación 3D · IA.         │ ingeniero que construye tu  │
   │                             │ B2B).                       │                             │ sistema.                    │
   └─────────────────────────────┴─────────────────────────────┴─────────────────────────────┴─────────────────────────────┘
   
   Translate to all 5 languages.

5. Section D — Closing CTA strip (small, low-key):
   - One short line: "¿No estás seguro de cuál es tu camino? Escríbeme y te ayudo a decidir."
   - <WhatsAppCTA variant="secondary" prefill="Hola Anton, no estoy seguro de cuál es mi camino. ¿Puedes ayudarme a decidir?" trackingId="hub-closing" />

6. Animations:
   - Scroll-reveal on each major section (opacity 0→1, translateY 24px→0, duration 400-500ms, easing ease-out-cubic, trigger when 20% in viewport).
   - Card hover: 200ms transitions.
   - Respect prefers-reduced-motion.

CONSTRAINTS
- The hub must NOT list any projects, skills, or detailed bios.
- Hero must NOT use CV-style language ("Senior Software Engineer with 10+ years..." is BANNED here).
- Total Hub length: short. Visitor should be able to choose a door within 5 seconds of scrolling.

ACCEPTANCE CRITERIA
- Hub renders correctly on desktop (1440px) and mobile (375px).
- All three door cards navigate to their correct routes and clicking one updates the data-lobby attribute on the layout.
- Credibility strip is visually impactful (numbers prominent, story lines readable).
- Closing CTA fires the correct WhatsApp prefill.
- All copy exists in all 5 languages (with TODO_TRANSLATE_REVIEW where machine-translated).
- Lighthouse Performance ≥ 85 on `/`.

STOP AND REPORT
Do NOT proceed to Phase 3. Report:
1. Screenshots of the Hub on desktop and mobile.
2. List of any TODO_TRANSLATE_REVIEW additions.
3. Any deviations from the spec and why.

Wait for "continue".
```

**Copy until here ↑**

---

# PHASE 3 — Lobby Empresas (`/empresas`) — THE CROWN JEWEL

**What you'll get:** the primary conversion lobby. This is the biggest, most important page. Expect this prompt to take the longest.

**Copy from here ↓**

```
You are starting Phase 3 of 8. This is THE most important page of the entire project. Take your time. Quality > speed.

GOAL OF THIS PHASE
Build the complete /empresas lobby, designed to convert business owners and CEOs into WhatsApp contacts.

CONTEXT TO RE-CONFIRM
Re-read PROJECT_CONSTITUTION.md sections 7 (content rules), 8 (credibility block), 9 (ask Anton), 10 (placeholders). Also consult brief_portfolio_anton_megumi_joy.md section 6 (Lobby A spec) and brief_correcciones_portfolio_anton.md section 4 (avatar empresario fixes).

TASKS

1. Set <Helmet>:
   - Title: "Automatización e IA para tu negocio · Megumi Joy"
   - Description: "Sistemas a medida, productos listos (ABAF, Voicey) y auditorías estratégicas. Para empresarios que quieren recuperar tiempo y escalar."

2. Section 1 — Hero:
   - H1 (ES canonical): "Tu negocio funcionando solo. O casi."
     - Highlight the word "solo" in --accent color.
   - Subhead: "Automatizamos los procesos que te roban horas, integramos IA donde antes había manualidad, y construimos los sistemas que tu negocio necesita — a medida o llave en mano."
   - Two CTAs side by side:
     - Primary: <WhatsAppCTA variant="primary" size="lg" label="Hablar con Anton por WhatsApp" prefill="Hola Anton, vengo de tu portfolio. Tengo un negocio en [sector] y quiero explorar cómo podríamos automatizar [proceso]. ¿Tienes 15 min esta semana?" trackingId="empresas-hero-primary" />
     - Secondary: a "Ver cómo trabajamos ↓" button that smooth-scrolls to Section 5 (Cómo trabajamos).
   - Visual right side: a subtle abstract animation (CSS or lightweight SVG/Canvas) suggesting data flow or process automation. No stock photos. If unsure, use a geometric pulse/grid pattern in --accent color with low opacity.

3. Section 2 — Credibility block (use the EXACT structure from Constitution Section 8). This is the four-pillar block with the numbers +10, 2, 5, 0 and the story lines. Same content as in the Hub but you may give it slightly more breathing room here.

4. Section 3 — "Dolores que resolvemos" (4 cards):
   Title: "Problemas que probablemente reconoces"
   Subtitle: "Si alguno de estos te suena, hay sistema para resolverlo."
   
   Four cards in a 2x2 grid (desktop) or stacked (mobile):
   - Card A: "Tu equipo dedica horas a tareas que un sistema debería hacer." → CTA "Automatizar esto →" with prefill "Hola Anton, en mi negocio el equipo dedica horas a tareas repetitivas. ¿Cómo lo automatizamos?"
   - Card B: "Tus datos viven en hojas de cálculo y no puedes ver la operación en tiempo real." → CTA "Quiero ver mi operación →" with prefill "Hola Anton, mis datos están en hojas. Quiero un sistema que me dé visibilidad real."
   - Card C: "Pierdes leads porque no hay nadie atendiendo fuera de horario." → CTA "Resolverlo con IA →" with prefill "Hola Anton, pierdo leads fuera de horario. ¿Puede ayudarme una IA?"
   - Card D: "Sabes que la IA puede ayudarte, pero no tienes a alguien técnico de confianza." → CTA "Hablemos sin compromiso →" with prefill "Hola Anton, quiero integrar IA en mi negocio pero necesito alguien técnico de confianza."

5. Section 4 — "Tres formas de trabajar con nosotros":
   Three columns. Each:
   
   - Column 1: 
     - Title: "Construcción a medida"
     - Description: "Diagnosticamos tu operación, identificamos los procesos críticos y construimos exactamente lo que tu negocio necesita: integraciones, agentes IA, automatizaciones, dashboards, sistemas internos."
     - Price: "[ASK_ANTON or use placeholder] Desde 3.500€ (TODO_ANTON_CONFIRM)"
     - Timing: "2-4 semanas para automatizaciones, 2-4 meses para sistemas completos."
     - CTA: "Hablemos de tu proyecto →" with prefill from prefill catalog.
   
   - Column 2:
     - Title: "Productos listos para integrar"
     - Description: "Soluciones SaaS que ya hemos construido y puedes empezar a usar hoy: ABAF (búsqueda automática de leads) y Voicey (asistente IA operativo 24/7)."
     - Price: "Suscripción mensual. Pricing por uso, similar a los principales LLM del mercado."
     - CTA: "Ver productos ↓" — smooth scroll to Section 7.
   
   - Column 3:
     - Title: "Auditoría estratégica"
     - Description: "¿No sabes por dónde empezar? Sesión de 60-90 minutos donde mapeamos tu operación, detectamos los cuellos de botella reales y te dejamos una hoja de ruta clara."
     - Price: "[ASK_ANTON or use placeholder] Desde 900€ (TODO_ANTON_CONFIRM)"
     - CTA: "Reservar auditoría →" with prefill from prefill catalog.

6. Section 5 — "Cómo trabajamos" (4-step process):
   Title: "De la primera llamada al sistema funcionando"
   
   Four numbered steps in a horizontal timeline (desktop) or vertical stack (mobile):
   1. "Llamada de descubrimiento (gratis)" — "30-45 min para entender tu negocio y tu cuello de botella real."
   2. "Propuesta y plan" — "Hoja de ruta clara, presupuesto cerrado, plazos. Sin sorpresas."
   3. "Construcción y comunicación semanal" — "Iteramos contigo, no por nuestra cuenta. Ves avances cada semana."
   4. "Entrega + acompañamiento" — "Sistema operativo, equipo formado, soporte continuo si lo necesitas."
   
   Below the timeline, a single line in slightly larger weight:
   "No subcontratamos. Anton es quien construye lo que tú compras."
   
   CTA at bottom: "Empezar con la llamada de descubrimiento →" with appropriate prefill.

7. Section 6 — "Casos reales" (real projects translated to business language):
   Title: "Lo que ya hemos construido"
   
   Card 1 (STAR — visually largest, takes full row or 2/3 width):
   - Eyebrow: "Sector servicios · Bienestar"
   - Headline: "El día que la dueña dejó de llevar el negocio en su cabeza"
   - Body: "Reservas, clientes, equipo, pagos, métricas — todo vivía en hojas, post-its y la memoria de la fundadora. Diseñamos y construimos el sistema operativo completo del negocio: un único panel desde el que ver y dirigir toda la operación en tiempo real."
   - Results line (if Anton provides real metrics, use them; otherwise this placeholder): "Operación 100% digitalizada · Decisiones en tiempo real · Equipo trabajando sobre un sistema único"
   - Add a TODO_ANTON_CONFIRM comment in the code asking for real metrics.
   - Stack tags (small, at bottom): React · Python · Supabase
   - CTA: "Hablar de un proyecto similar →" with appropriate prefill.
   
   Card 2 (standard):
   - Eyebrow: "EdTech · SaaS B2C/B2B"
   - Headline: "De idea a SaaS completo: pagos, IA e infraestructura productiva"
   - Body: "Plataforma educativa con evaluación adaptativa por IA y pasarela de pagos segura 3DS2 integrada. Caso de demostración: somos capaces de ejecutar un producto SaaS de extremo a extremo — frontend, backend, pasarela, IA, infraestructura."
   - Stack tags: Next.js · Django · IA adaptativa
   
   Card 3 (standard):
   - Eyebrow: "Logística · B2B · IA aplicada"
   - Headline: "Optimización de rutas con datos reales y agentes IA"
   - Body: "Simulador logístico de alta fidelidad construido sobre geodatos reales (OpenStreetMap). Aplicable directamente a empresas con flota de transporte: reduce kilómetros, combustible y tiempo de entrega."
   - Stack tags: Godot 4 · OSM · IA
   
   DO NOT include "Glassmorphic UI Engine", "EduStableCoin", or other technical-only projects. Those belong in /sobre.

8. Section 7 — "Productos que puedes usar hoy":
   Two horizontal product cards:
   
   ABAF:
   - Eyebrow: "Producto · Generación de leads"
   - Headline: "Encuentra clientes potenciales mientras duermes"
   - Body: "ABAF rastrea internet de forma continua buscando los leads que encajan con el perfil que tú defines. Multi-fuente, exportable, escalable. Sin que tu equipo levante un dedo."
   - CTA: "Saber más sobre ABAF →" with appropriate prefill.
   
   Voicey:
   - Eyebrow: "Producto · Asistente IA"
   - Headline: "Tu asistente IA 24/7 con poder operativo real"
   - Body: "Voz, texto, memoria larga, y poder operativo real. No solo te responde — ejecuta tareas por ti."
   - CTA: "Ver Voicey en detalle →" → links to /voicey

9. Section 8 — FAQ (accordion):
   Title: "Preguntas que probablemente te haces"
   
   Items (each expandable):
   - "¿Cuánto cuesta un proyecto a medida?" → "Depende del alcance. Tras la llamada de descubrimiento te damos presupuesto cerrado. Rango típico: desde 3.500€ para automatizaciones puntuales hasta 15.000€ o más para sistemas operativos completos. La auditoría estratégica empieza desde 900€." (TODO_ANTON_CONFIRM for final numbers)
   - "¿Cuánto tarda?" → "Automatización simple: 2-4 semanas. Sistema completo: 2-4 meses. Te damos cronograma cerrado antes de empezar."
   - "¿Y si no soy técnico?" → "Mejor. Hablamos en lenguaje de negocio, no de código. Anton hace de puente."
   - "¿Trabajáis con empresas pequeñas?" → "Desde autónomos con un proceso concreto a automatizar hasta empresas medianas con múltiples áreas. Si tiene sentido, lo abordamos."
   - "¿Y si quiero algo que ya tenéis (ABAF, Voicey)?" → "Suscripción mensual, integración rápida, soporte incluido."
   - "¿Trabajáis con clientes fuera de España?" → "Sí. El sitio está en 5 idiomas por una razón."

10. Section 9 — Risk reversal (small block before final CTA):
    Three checkmarks:
    ✓ Si no podemos ayudarte, te lo decimos en la primera llamada y te orientamos a quién sí.
    ✓ Presupuesto cerrado siempre. Cero facturas sorpresa.
    ✓ Comunicación semanal del avance. Tú decides el ritmo.
    
    Add TODO_ANTON_CONFIRM asking if Anton wants to add a stronger guarantee (e.g., "if you're not satisfied in the first 2 weeks, we stop and refund the unrendered portion").

11. Section 10 — Final CTA (large, full-width block):
    - Background: subtle gradient with --accent-soft glow.
    - Headline: "Si lees hasta aquí, ya tienes una idea en la cabeza."
    - Subhead: "Cuéntamela. 15 minutos, sin compromiso. Te digo si puedo ayudarte y, si no, te digo quién sí."
    - CTA: <WhatsAppCTA variant="primary" size="lg" label="Escribir a Anton por WhatsApp" prefill={same as hero primary} trackingId="empresas-final-cta" />
    - To the right of (or below) the CTA: small placeholder avatar with initials "A" — wired to receive a real photo when Anton provides one. Add TODO_ANTON_CONFIRM_PHOTO.

CONSTRAINTS
- Every CTA uses <WhatsAppCTA> with a unique trackingId.
- All copy in Spanish first, translated to 4 other languages (TODO_TRANSLATE_REVIEW where machine-translated).
- All TODOs use one of two markers: TODO_ANTON_CONFIRM (data Anton needs to confirm) or TODO_TRANSLATE_REVIEW (machine translation needs human review).
- No exclamation marks anywhere in copy.
- No banned vocabulary (see Constitution Section 3).

ACCEPTANCE CRITERIA
- Page loads at /empresas with all sections present.
- Each section has correct accent color (gold/amber) in the right places.
- Every WhatsApp CTA opens wa.me with the correct prefill.
- FAQ accordion works smoothly.
- Mobile rendering is equally usable (test at 375px).
- All TODOs are findable via grep ("TODO_ANTON_CONFIRM" and "TODO_TRANSLATE_REVIEW").
- No console errors.
- Lighthouse Performance on /empresas ≥ 85.

STOP AND REPORT
Do NOT proceed to Phase 4. Report:
1. Screenshots of /empresas (desktop and mobile) showing each major section.
2. Full list of TODO_ANTON_CONFIRM markers — these are the questions for Anton.
3. Full list of TODO_TRANSLATE_REVIEW markers.
4. Any decisions you made that weren't covered in the spec.

Wait for "continue".
```

**Copy until here ↑**

---

# PHASE 4 — Lobby Voicey (`/voicey`)

**What you'll get:** the pre-alpha Voicey product lobby.

**Copy from here ↓**

```
You are starting Phase 4 of 8. /empresas is complete and approved.

GOAL OF THIS PHASE
Build the complete /voicey lobby. Tone: futuristic, confident, "early access — by invitation". Conversion goal: WhatsApp contact for early access or partnerships.

REFERENCE
brief_portfolio_anton_megumi_joy.md section 7 (Lobby B Voicey).

TASKS

1. Set <Helmet>:
   - Title: "Voicey · Asistente IA con poder operativo real"
   - Description: "Voicey no responde — ejecuta. Voz, texto, memoria larga, multi-modelo. Acceso anticipado por invitación."

2. Section 1 — Immersive hero:
   - Background: animated waveform (CSS-only or lightweight Canvas/WebGL). Reactive feel, but lightweight — must not hurt performance. Use --accent (#7B5BFF) for the waveform color with low opacity.
   - Badge above H1 (small, pill-shaped, accent border): "Pre-alpha · Acceso por invitación"
   - H1: "Voicey no es otro chatbot. Es alguien que ejecuta por ti."
   - Subhead: "Asistente IA por voz y texto, 24/7, con memoria larga y capacidad operativa real. Te responde, sí — pero sobre todo, hace cosas."
   - Two CTAs:
     - Primary: <WhatsAppCTA label="Solicitar acceso anticipado" prefill="Hola Anton, quiero acceso anticipado a Voicey. Mi caso de uso: [describir]." trackingId="voicey-hero-primary" />
     - Secondary: "Cómo funciona ↓" smooth-scroll to Section 2.

3. Section 2 — "Qué hace diferente a Voicey" (4 cards in 2x2 grid):
   - Card 1: "Voz natural en tiempo real" — "Conversación fluida, sin lag perceptible."
   - Card 2: "Memoria que de verdad recuerda" — "No olvida lo que dijiste hace 3 semanas."
   - Card 3: "Multi-modelo bajo el capó" — "Acceso a los mejores LLM del momento: Claude, GPT, Gemini y otros. Voicey decide cuál usar para cada tarea."
   - Card 4: "Poder operativo real" — "Ejecuta tareas en remoto: gestiona correos, agenda, navega, llama APIs. No solo charla."
   Each card has a small icon (Lucide icons recommended for consistency).

4. Section 3 — "Casos de uso" (tabs by avatar):
   Tabs across the top: "Para empresarios" | "Para profesionales" | "Para equipos" | "Para individuos"
   
   Content per tab:
   - Empresarios: "Delegar gestión de comunicaciones, procesar leads, supervisar equipos, generar reportes hablando."
   - Profesionales: "Asistente de investigación profundo, escritura colaborativa, gestión de proyectos por voz."
   - Equipos: "Asistente compartido con memoria del equipo, automatización de procesos internos."
   - Individuos: "Asistente personal real, recordatorios contextuales, gestión de vida digital."
   
   Each tab shows 3-4 specific examples in a small bulleted list.

5. Section 4 — "Pricing":
   Headline: "Pricing como los modelos que usa: pagas por lo que consumes."
   Subtext: "Modelos B2B, B2C, B2E y E2E disponibles. Sin sorpresas, sin lock-in. Hablemos de tu caso."
   
   Three placeholder tier cards (mark with TODO_ANTON_CONFIRM):
   - "Individual" — "Acceso personal. Tarifa mensual base + consumo."
   - "Equipos" — "Memoria compartida, multi-usuario, integración con tus herramientas."
   - "Empresa / Whitelabel" — "Despliegue dedicado, modelo propio, branding tuyo."
   
   CTA below: "Hablar de pricing →" with prefill from catalog.

6. Section 5 — "Estado del producto" (transparency block):
   Title: "Estamos en pre-alpha. Esto es lo que significa."
   Bullets:
   - "Funcionalidad core operativa, en validación con usuarios seleccionados."
   - "Acceso por invitación: garantiza que tus feedbacks se incorporen al producto."
   - "Roadmap claro hacia beta pública en los próximos meses."
   CTA: "Quiero entrar en la lista →" with prefill "Hola Anton, quiero entrar en la lista de early access de Voicey. Mi caso de uso: [describir]."

7. Section 6 — Final CTA:
   - Headline: "Estás a un mensaje de tener un asistente que de verdad trabaja."
   - CTA: large WhatsApp button with same prefill as hero primary.

CONSTRAINTS
- data-lobby="voicey" must be set on the layout for this route.
- Accent color used in waveform, highlights, primary buttons.
- All copy translated to 5 languages.
- Waveform animation must respect prefers-reduced-motion (replace with static gradient if reduced motion is on).

ACCEPTANCE CRITERIA
- /voicey loads with the purple accent visibly active.
- Waveform animation runs smoothly on desktop, doesn't break mobile.
- Tabs in "Casos de uso" switch content without page reload.
- All CTAs work with correct prefills.
- TODO_ANTON_CONFIRM markers in place for pricing tiers.

STOP AND REPORT
Same format as before. Wait for "continue".
```

**Copy until here ↑**

---

# PHASE 5 — Lobby Games (`/games`)

**What you'll get:** the game dev / investor lobby. Visuals matter most here.

**Copy from here ↓**

```
You are starting Phase 5 of 8.

GOAL OF THIS PHASE
Build the /games lobby targeting investors, partners, and collaborators in the game dev / simulation space. Visuals carry the message.

REFERENCE
brief_portfolio_anton_megumi_joy.md section 8 (Lobby C Games).

TASKS

1. Set <Helmet>:
   - Title: "Game Dev y Simulación · Megumi Joy"
   - Description: "Simulación de alto rendimiento, GameDev y proyectos en busca de inversión. Godot 4, Unity HDRP, IA, geodatos reales."

2. Section 1 — Visual hero:
   - If Anton provides screenshots/renders/video: use the strongest one as full-width hero background.
   - If no media available yet: use an abstract geometric animation in --accent (#10B981) — TODO_ANTON_CONFIRM_MEDIA in a comment.
   - H1: "Mundos que se sienten reales. Construidos por uno."
   - Subhead: "Simulación de alto rendimiento, GameDev y experiencias interactivas. 60fps, IA, geodatos reales, hardware integrado. Si imaginas algo difícil, probablemente ya lo he construido o estoy a punto."
   - Two CTAs:
     - Primary: "Hablar de inversión / colaboración" with prefill from catalog.
     - Secondary: "Ver proyectos ↓"

3. Section 2 — Project cards (4 large cards with prominent visuals):
   
   Card 1: B2B Logistics & AI Simulator
   - Visual placeholder until Anton provides screenshot — TODO_ANTON_CONFIRM_MEDIA.
   - Eyebrow: "Simulación · B2B · IA"
   - Description: "Simulador logístico de alta fidelidad sobre geodatos reales (OSM), diseñado para optimización de rutas y entrenamiento de agentes IA. Escala: distritos urbanos sin límite. Construido con Godot 4."
   - Tags: Godot 4 · OSM · IA · 60fps
   - CTA: "Ver demo / hablar del proyecto →"
   
   Card 2: Sea Hunter — del 3D al físico
   - Visual: render + physical product photo if available, otherwise TODO_ANTON_CONFIRM_MEDIA.
   - IMPORTANT: rewrite the description in EVERY language. The current site has Chinese text leaking into the English version — fix this in all languages, including English, Spanish, Russian, Ukrainian, Catalan.
   - Eyebrow: "Juego de cartas · Producto finalizado"
   - Description (ES canonical): "Prueba de capacidad de ejecución completa — del prototipo digital 3D a la producción física en cartón. Demuestra capacidad de cerrar ciclos completos de producto."
   - Tags: 3D · Producción física · Game design
   
   Card 3: Simulador de transporte industrial
   - Eyebrow: "Simulación industrial · Unity HDRP"
   - Description: "Simulador de transporte de alto rendimiento con comportamiento NPC complejo, certificado para uso industrial. Generadores procedurales de entorno en C# que redujeron el ciclo de desarrollo en 70%."
   - Tags: Unity HDRP · C# · Generación procedural
   
   Card 4: Placeholder for current investment-seeking project
   - This requires data from Anton. If unavailable: render a card with eyebrow "En desarrollo · Buscando inversión", title "Próximo proyecto", body "Próximamente disponible más información. Si te interesa invertir en game dev / simulación, hablemos." and a CTA to WhatsApp with prefill "Hola Anton, me interesa tu próximo proyecto en game dev. ¿Puedes contarme más?". Mark with TODO_ANTON_CONFIRM_PROJECT for full details.

4. Section 3 — "Capacidades técnicas" (clean list):
   Title: "Stack y capacidades"
   - Game engines: Godot 4, Unity HDRP
   - 3D: Blender pipeline integrado
   - Simulación: agentes NPC, geodatos reales, IA
   - Performance: 60fps en escenarios complejos, optimización de bajo nivel
   - Hardware: integración de telemetría real para gemelos digitales
   - Full-stack: capacidad de envolver el juego/sim en SaaS completo

5. Section 4 — Investor block:
   - Headline: "¿Buscas dónde poner capital en gaming/sim?"
   - Body: "Tengo proyectos en distintos estados de madurez, todos con propiedad intelectual propia y arquitectura técnica sólida. Si te interesa el ángulo de simulación con aplicación industrial o gaming con tracción técnica, hablemos."
   - CTA: "Solicitar pitch deck completo →" with prefill from catalog.

6. Section 5 — Final CTA: same pattern as other lobbies, with games-specific prefill.

CONSTRAINTS
- data-lobby="games" must be set.
- Visuals are placeholder if Anton has not provided real media — mark all placeholders clearly.
- Sea Hunter Chinese-text bug MUST be fixed in this phase across all 5 languages.

ACCEPTANCE CRITERIA
- /games loads with the teal accent.
- All 4 project cards render even if visuals are placeholders.
- Sea Hunter has correct localized description in every language.
- TODO_ANTON_CONFIRM_MEDIA and TODO_ANTON_CONFIRM_PROJECT markers in place where applicable.

STOP AND REPORT
Same format. Wait for "continue".
```

**Copy until here ↑**

---

# PHASE 6 — `/sobre` + Legacy cleanup

**What you'll get:** consolidated About page + removal of the old 5-persona structure.

**Copy from here ↓**

```
You are starting Phase 6 of 8.

GOAL OF THIS PHASE
Build the /sobre page that consolidates the legacy 5-persona content into one coherent narrative, AND archive the legacy persona pages from public routing.

TASKS

1. Build /sobre page.

   Set <Helmet>:
   - Title: "Sobre Anton & Megumi Joy"
   - Description: "10+ años construyendo: hardware, simulación, full-stack, IA. La historia detrás del estudio."

2. Section 1 — Hero:
   - Layout: photo on the left (50%), text on the right (50%). On mobile, photo on top, text below.
   - Photo: use placeholder <Avatar /> component with initials "A" until Anton provides a real photo — TODO_ANTON_CONFIRM_PHOTO.
   - H1: "Anton. 10+ años. De firmware en sensores médicos a sistemas IA para negocios."
   - Body (2-3 short paragraphs):
     - Para 1: "Megumi Joy es el estudio. Anton es quien lo dirige y quien construye lo que tú compras. Sin subcontratas, sin agencias de relleno."
     - Para 2: "Empezó con C++ y firmware para sensores médicos. Pasó por simulación industrial liderando equipos. Hoy construye sistemas full-stack y productos IA para negocios — y juega con game dev cuando hace falta."
     - Para 3: "Cuando contratas a Megumi Joy, contratas directamente al ingeniero que hará el trabajo. Eso es lo que cambia el resultado."

3. Section 2 — Career timeline (3 phases consolidated from the 5 personas):
   Title: "Trayectoria"
   
   Phase 1 (2013-2018): Hardware & Systems Integration
   - "Especialista en integración hardware/software en una firma de microsistemas. Firmware C/C++ de bajo nivel para equipos de sensores médicos y de laboratorio. Scripts de Python de alto rendimiento para análisis de datos en tiempo real. Integración de matrices de sensores STM32/ESP32 en gemelos digitales para automatización de procesos industriales."
   
   Phase 2 (2020-2022): Lead Simulation Engineer
   - "Lead engineer en un estudio EdTech / Industrial Sim. Arquitectura de entornos de entrenamiento realistas. Lideré el desarrollo de un simulador de transporte (60fps) con comportamiento NPC complejo para certificación industrial. Creé generadores procedurales de entorno en C# que redujeron el ciclo de desarrollo en 70%. Integración de telemetría hardware en motores 3D para simulación en tiempo real."
   
   Phase 3 (2023-presente): Estudio propio — Megumi Joy
   - "Desarrollo full-stack, productos IA aplicados y automatización para empresas. Construí sistemas privados de gestión y conteo de datos, lancé un Simulador Logístico B2B en Godot 4, desarrollé la plataforma LingoQuest (EdTech con IA adaptativa y pagos integrados), llevé Sea Hunter del prototipo 3D a producción física, y diseñé el sistema operativo escalable de Megumi Massage (sector servicios). Actualmente desarrollando Voicey (asistente IA) y ABAF (generación de leads B2B)."

4. Section 3 — Technical stack (here jargon is welcome):
   Title: "Stack técnico"
   Display in clean chip/tag groups by domain:
   - Frontend & Web: React, Next.js, TypeScript, WebGL, Three.js, Vue
   - Backend & APIs: Python 3.12, FastAPI, Django, gRPC, Asyncio, PostgreSQL, RabbitMQ
   - Infra: Kubernetes, Helm, GitLab CI, Supabase
   - Game / Sim: Godot 4, Unity HDRP, Blender, C#
   - Hardware / Embedded: C/C++, STM32, ESP32, Raspberry Pi
   - AI / ML: integración multi-LLM, fine-tuning, agentes operativos

5. Section 4 — Languages: "Anton habla y trabaja en: español, inglés, ruso, ucraniano, catalán." (or whichever subset is accurate — TODO_ANTON_CONFIRM_LANGUAGES)

6. Section 5 — Final CTA: 
   - Headline: "¿Suena como el tipo de ingeniero que necesitas?"
   - CTA: WhatsApp with prefill "Hola Anton, vengo de la página 'sobre'. Me interesa hablar contigo."

7. Legacy cleanup:
   - Move the existing 5 persona views (Senior, GameDev, Frontend, Backend, Embedded) to /src/_archive/legacy-personas/
   - Remove any router entries that point to them.
   - Remove any navbar/footer links that point to them.
   - Do NOT delete the code — just archive it.
   - Add a README.md in /src/_archive/legacy-personas/ explaining what was archived and why.

CONSTRAINTS
- /sobre uses the default lobby theme (no accent override) OR uses a neutral premium accent — your choice, but document the decision.
- All copy translated to 5 languages.
- Legacy code archived, not deleted.

ACCEPTANCE CRITERIA
- /sobre loads with the consolidated narrative.
- All 5 legacy persona routes return 404 or redirect to /sobre (your choice — redirect is friendlier for old links).
- No legacy navigation links remain in navbar or footer.
- /src/_archive/legacy-personas/ exists with the archived code and a README.

STOP AND REPORT
Same format. Wait for "continue".
```

**Copy until here ↑**

---

# PHASE 7 — SEO, structured data & i18n consistency

**What you'll get:** the site fully optimized for search engines and free of language inconsistencies.

**Copy from here ↓**

```
You are starting Phase 7 of 8.

GOAL OF THIS PHASE
Apply SEO best practices across all routes, add structured data, and fix any i18n inconsistencies that remain.

TASKS

1. Verify all pages have correct <Helmet> data:
   - <title>: as specified in Constitution Section 11 / detailed brief.
   - <meta name="description">: per route, ≤155 chars.
   - <meta property="og:title">, og:description, og:image (use a placeholder 1200x630 OG image generated per lobby with the accent color — TODO_DESIGN_OG_IMAGES if no proper design exists yet, but ship a basic one).
   - <meta property="og:url"> canonical.
   - <meta name="twitter:card" content="summary_large_image">

2. Add JSON-LD structured data in the <head> of relevant pages:
   
   On / and /sobre — Organization schema:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Organization",
     "name": "Megumi Joy",
     "url": "https://megumi-joy.github.io/portfolio/",
     "founder": { "@type": "Person", "name": "Anton" },
     "description": "Estudio técnico especializado en automatización, IA aplicada y desarrollo de productos full-stack para empresas."
   }
   ```
   
   On /sobre — Person schema for Anton with worksFor pointing to Megumi Joy.
   
   On /empresas — Service schemas for the 3 modalidades (auditoría, automatización puntual, sistema operativo completo). Each with priceRange and description.
   
   On /voicey — SoftwareApplication schema, applicationCategory "BusinessApplication".

3. i18n consistency audit:
   - Verify ALL new translation keys added in phases 1-6 exist in ALL 5 language files (ES, EN, RU, UK, CA).
   - Generate a report listing any TODO_TRANSLATE_REVIEW markers — count by language.
   - Verify NO Chinese text remains in non-Chinese versions (especially the Sea Hunter project description).
   - Verify the <html lang="..."> attribute updates correctly when the user switches language.

4. Create or update sitemap.xml at the project root, listing all 5 new routes with appropriate priorities (/ and /empresas highest at 1.0 and 0.9, others 0.7-0.8).

5. Create or verify robots.txt:
   - Allow all.
   - Reference sitemap.xml.
   - Disallow /_archive/ (the legacy code).

6. Performance check:
   - Verify React.lazy + Suspense is in use for the 5 routes (each lobby loads its own bundle).
   - Verify images use loading="lazy" and decoding="async".
   - Verify fonts use font-display: swap.
   - Verify CSS variables are used consistently (no hardcoded colors that should reference --accent).

CONSTRAINTS
- Do NOT touch the existing i18n structure — only verify completeness.
- Structured data must be valid (test via https://search.google.com/test/rich-results if possible).
- OG images can be programmatically generated or templated — they don't need to be hand-designed for v1.

ACCEPTANCE CRITERIA
- All routes have unique, optimized title and description meta tags.
- Structured data validates without errors.
- No Chinese text leaks anywhere except in the actual Chinese version (if one exists — current site has 5 languages, none of which is Chinese, so it should be ZERO occurrences).
- sitemap.xml and robots.txt present at root.
- Lighthouse SEO score ≥ 95 on all routes.

STOP AND REPORT
Same format. Include:
- The full i18n completeness report.
- Lighthouse SEO scores per route.
- Any structured data validation warnings.

Wait for "continue".
```

**Copy until here ↑**

---

# PHASE 8 — Final QA & polish

**What you'll get:** the site verified end-to-end and ready to ship.

**Copy from here ↓**

```
You are starting Phase 8 of 8. Final phase.

GOAL OF THIS PHASE
Verify everything works, measure performance, fix small polish issues, and prepare a deploy-ready build.

TASKS

1. Cross-route verification:
   - Navigate to /, /empresas, /voicey, /games, /sobre.
   - On each: verify Helmet meta tags, data-lobby attribute correct, accent color applied correctly.
   - Verify all CTAs across all routes open wa.me with the correct prefill (test by clicking and inspecting the URL).
   - Verify language switcher works on every route and triggers the language_change tracking event.

2. Mobile responsiveness audit (use Chrome DevTools at 375px, 768px, 1024px, 1440px):
   - No horizontal scroll on any viewport.
   - Touch targets ≥ 44x44px.
   - Hamburger menu functional on mobile.
   - WhatsApp floating button visible and tappable on mobile.

3. Accessibility audit:
   - All images have alt text.
   - All buttons have accessible names or aria-labels.
   - Focus states visible on all interactive elements.
   - Color contrast WCAG AA throughout.
   - prefers-reduced-motion honored (test by enabling in DevTools).
   - Semantic HTML structure (proper heading hierarchy, no h1 → h3 jumps).

4. Performance audit:
   - Run Lighthouse on /, /empresas, /voicey, /games, /sobre.
   - Targets: Performance ≥ 85, Accessibility ≥ 90, Best Practices ≥ 90, SEO ≥ 95.
   - If any route fails a target, identify the top 3 issues and fix them.

5. Console check:
   - Zero errors in console on any route.
   - Zero React warnings.
   - Zero failed network requests.

6. Tracking verification:
   - Click 5 different WhatsApp CTAs across different routes.
   - Verify each one logs the expected event object with correct lobby, position, language, trackingId.

7. Generate a CHANGES_SUMMARY.md at the project root with:
   - High-level summary of what was rebuilt.
   - List of all TODO_ANTON_CONFIRM markers grouped by category (pricing, metrics, photo, project info, etc.).
   - List of all TODO_TRANSLATE_REVIEW markers grouped by language.
   - List of legacy files archived.
   - Recommended next steps for the user.

8. Final build & deploy readiness:
   - Run the build (npm run build or equivalent).
   - Verify the build succeeds without errors.
   - Verify the build output structure is correct for GitHub Pages deployment (matches what the current site uses).
   - Do NOT push to main yet — leave the branch ready for the user to review and merge.

CONSTRAINTS
- Do NOT push to main.
- Do NOT change the i18n system.
- Fix any small issues you find as long as they are unambiguous bugs, not design decisions.

ACCEPTANCE CRITERIA
- All Lighthouse targets met or exceeded on all 5 routes.
- Zero console errors, zero failed network requests.
- All TODOs catalogued in CHANGES_SUMMARY.md.
- Build succeeds.
- Branch is ready for user review.

STOP AND REPORT
Final report. Include:
- Lighthouse scores for all 5 routes (full numbers, not just "passed").
- Complete CHANGES_SUMMARY.md contents.
- Any remaining issues or concerns the user should be aware of.
- A short "what's next" recommendation: review → merge → deploy → collect Anton's data to resolve TODOs.

Project complete. Hand off to the user.
```

**Copy until here ↑**

---

# AFTER THE 8 PHASES

When all 8 phases are done:

1. **Review** the branch in Antigravity / the live preview.
2. **Collect Anton's answers** to the TODO_ANTON_CONFIRM markers (catalogued in `CHANGES_SUMMARY.md`).
3. **Run a quick re-prompt** asking the agent to replace all TODO_ANTON_CONFIRM placeholders with Anton's actual data — that's a 30-min mini-prompt, not part of the 8 phases.
4. **Merge** to main, deploy to GitHub Pages.
5. **Monitor** the `whatsapp_click` console logs (or hook up Plausible) to see which CTAs convert.

That's it. Build it, ship it, iterate based on real data.

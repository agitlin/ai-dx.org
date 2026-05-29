import { b as createComponent, r as renderComponent, i as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BujmRmD2.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose"> <div class="article-header"><h1>About</h1></div> <p>Developer experience used to mean: good tooling, fast feedback loops, clear documentation, no unnecessary friction.</p> <p>In the age of AI, that definition needs an update. Now DX includes: how well you work with an LLM, how you structure your context, how you decide when to trust the output and when to push back. It includes what it means to be a <em>Frictional CTO</em> — someone who creates the right friction, disagrees with the vibe, and future-proofs what the AI built.</p> <p>ai-dx.org is about all of that. It's written by someone with 35 years of programming experience, 30 years of getting paid for it, and a strong opinion that wearing many hats is not a liability anymore — it's the job.</p> <p>The goal: make AI a genuine multiplier on your work, not a crutch. Unapologetic about using AI. Skeptical about using it badly.</p> </article> ` })}`;
}, "/sessions/kind-gracious-gauss/mnt/1u/sites/ai-dx.org/src/pages/about.astro", void 0);

const $$file = "/sessions/kind-gracious-gauss/mnt/1u/sites/ai-dx.org/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

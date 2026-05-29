import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><strong>Frictional CTO: I kill the vibes so the software could live a healthy life.</strong></p>\n<p>Vibe coding has the good vibes — but the Frictional CTO creates friction and disagrees with the founder and the LLM. He finds things that are a gap between industry standards and the implementation. He sees around corners and future-proofs vibe-coded apps.</p>\n<p><strong>Vibe Coding could only have one capital letter. Is it a V or a C? You choose.</strong></p>\n<p>The concept: bring industry experience to the people who need it most — the future owners of bootstrapped vibe-coded businesses.</p>\n<p>Unlike a <em>fractional</em> CTO (time-shared), the <em>frictional</em> CTO’s value is precisely the friction itself. The pushback. The “have you thought about what happens when you have 10,000 users?” The moment of resistance that saves the product six months later.</p>\n<p>Each prompt and iteration should make your codebase better. It should know what you want. It should know what you want the app to look like. <strong>Compound Engineering.</strong></p>\n<p>The Frictional CTO prototype: engage with vibe coders not to validate, but to stress-test. Your experience is the diff between what the LLM generates and what will actually survive production.</p>";

				const frontmatter = {"title":"The Frictional CTO","date":"2026-03-09","tags":["ai","architecture","engineering","philosophy"],"description":"I kill the vibes so the software could live a healthy life. Unlike a fractional CTO, the frictional CTO's value is precisely the friction itself."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/ai-dx.org/src/content/articles/frictional-cto.md";
				const url = undefined;
				function rawContent() {
					return "\n**Frictional CTO: I kill the vibes so the software could live a healthy life.**\n\nVibe coding has the good vibes — but the Frictional CTO creates friction and disagrees with the founder and the LLM. He finds things that are a gap between industry standards and the implementation. He sees around corners and future-proofs vibe-coded apps.\n\n**Vibe Coding could only have one capital letter. Is it a V or a C? You choose.**\n\nThe concept: bring industry experience to the people who need it most — the future owners of bootstrapped vibe-coded businesses.\n\nUnlike a *fractional* CTO (time-shared), the *frictional* CTO's value is precisely the friction itself. The pushback. The \"have you thought about what happens when you have 10,000 users?\" The moment of resistance that saves the product six months later.\n\nEach prompt and iteration should make your codebase better. It should know what you want. It should know what you want the app to look like. **Compound Engineering.**\n\nThe Frictional CTO prototype: engage with vibe coders not to validate, but to stress-test. Your experience is the diff between what the LLM generates and what will actually survive production.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

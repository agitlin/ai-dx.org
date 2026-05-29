import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Things I know to be true — and the philosophy behind them.</p>\n<h2 id=\"on-ai-use\">On AI Use</h2>\n<p>Be unapologetic in the use of AI. Show how use of Claude Cowork facilitates learning as a <em>primary</em> objective — with the solved problem as a side effect. The documented process of communication can later serve as rich material to build a presentation about the process you went through.</p>\n<h2 id=\"on-wearing-many-hats\">On Wearing Many Hats</h2>\n<p>Front End, Back End, Architecture, DevOps, Product Management, QA, UX, DX, Support, CTO, Data Science, Machine Learning, AI Research, FinOps. It was much more natural 15 years ago. Now AI makes it natural again.</p>\n<h2 id=\"on-architecture\">On Architecture</h2>\n<ul>\n<li>Occam’s razor of software: don’t design like Netflix because you are not Netflix.</li>\n<li>Always have a working solution ready to go.</li>\n<li>Use AI tools so that you can focus on delivering value to the business.</li>\n</ul>\n<h2 id=\"on-knowledge-management\">On Knowledge Management</h2>\n<p>Want to be transparent and efficient at sharing and enhancing knowledge using platforms like NotebookLM. Make learning and decision-making transparent.</p>\n<h2 id=\"on-the-role\">On the Role</h2>\n<p>Someone who gets things done, documents them, documents the thought process and sources — and makes my job disappear. Someone who keeps up with the very fast developments in the AI field and brings the best to the steering committee.</p>";

				const frontmatter = {"title":"AI Use Philosophy","date":"2026-03-19","tags":["ai","workflow","dx","philosophy"],"description":"Be unapologetic about using AI. Show how it facilitates learning as a primary objective — with the solved problem as a side effect."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/ai-dx.org/src/content/articles/ai-use-philosophy.md";
				const url = undefined;
				function rawContent() {
					return "\nThings I know to be true — and the philosophy behind them.\n\n## On AI Use\n\nBe unapologetic in the use of AI. Show how use of Claude Cowork facilitates learning as a *primary* objective — with the solved problem as a side effect. The documented process of communication can later serve as rich material to build a presentation about the process you went through.\n\n## On Wearing Many Hats\n\nFront End, Back End, Architecture, DevOps, Product Management, QA, UX, DX, Support, CTO, Data Science, Machine Learning, AI Research, FinOps. It was much more natural 15 years ago. Now AI makes it natural again.\n\n## On Architecture\n\n- Occam's razor of software: don't design like Netflix because you are not Netflix.\n- Always have a working solution ready to go.\n- Use AI tools so that you can focus on delivering value to the business.\n\n## On Knowledge Management\n\nWant to be transparent and efficient at sharing and enhancing knowledge using platforms like NotebookLM. Make learning and decision-making transparent.\n\n## On the Role\n\nSomeone who gets things done, documents them, documents the thought process and sources — and makes my job disappear. Someone who keeps up with the very fast developments in the AI field and brings the best to the steering committee.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"on-ai-use","text":"On AI Use"},{"depth":2,"slug":"on-wearing-many-hats","text":"On Wearing Many Hats"},{"depth":2,"slug":"on-architecture","text":"On Architecture"},{"depth":2,"slug":"on-knowledge-management","text":"On Knowledge Management"},{"depth":2,"slug":"on-the-role","text":"On the Role"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

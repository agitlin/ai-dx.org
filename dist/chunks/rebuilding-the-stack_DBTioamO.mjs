import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Starting a new job means getting into proper volume of work across the modern AI developer toolkit. A clear list of what matters:</p>\n<ul>\n<li><strong>Claude Code</strong> and <strong>Claude Cowork</strong> — for iteration and progress</li>\n<li><strong>Python</strong> best practices for modules, packages, app architecture</li>\n<li><strong>NotebookLM</strong> as a knowledge management platform</li>\n<li><strong>FastAPI</strong> for backend</li>\n<li><strong>Docker containers</strong> — which ones to use</li>\n<li><strong>MCP servers</strong> — which to leverage</li>\n<li><strong>EC2 + auto-scaling</strong> for processing large batches</li>\n<li><strong>CI/CD pipelines</strong> — vision and implementation</li>\n<li><strong>Unit, Integration, User Acceptance Tests</strong></li>\n</ul>\n<p>Best practice for AI DX workflow: use AI as a partner during all stages — initial ideation, design, documentation, prototype, testing, deployment, troubleshooting, monitoring.</p>\n<p>The goal is not to do all of this at once. Life does not end when the job starts. It improves further.</p>\n<p>The DX insight here: the stack is not a list of tools. It’s a set of relationships. Which tools do you trust, how do you hand work off between them, and where do you put the human judgment?</p>";

				const frontmatter = {"title":"Rebuilding the Stack","date":"2026-03-22","tags":["ai","dx","tools","workflow","architecture"],"description":"The modern AI developer toolkit — what matters now, and the philosophy of using AI as a partner at every stage."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/ai-dx.org/src/content/articles/rebuilding-the-stack.md";
				const url = undefined;
				function rawContent() {
					return "\nStarting a new job means getting into proper volume of work across the modern AI developer toolkit. A clear list of what matters:\n\n- **Claude Code** and **Claude Cowork** — for iteration and progress\n- **Python** best practices for modules, packages, app architecture\n- **NotebookLM** as a knowledge management platform\n- **FastAPI** for backend\n- **Docker containers** — which ones to use\n- **MCP servers** — which to leverage\n- **EC2 + auto-scaling** for processing large batches\n- **CI/CD pipelines** — vision and implementation\n- **Unit, Integration, User Acceptance Tests**\n\nBest practice for AI DX workflow: use AI as a partner during all stages — initial ideation, design, documentation, prototype, testing, deployment, troubleshooting, monitoring.\n\nThe goal is not to do all of this at once. Life does not end when the job starts. It improves further.\n\nThe DX insight here: the stack is not a list of tools. It's a set of relationships. Which tools do you trust, how do you hand work off between them, and where do you put the human judgment?\n";
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

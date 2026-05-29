import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A man complains to his coach: My son is doing poorly in school, my mother-in-law is living with us and giving me hell, my wife does not respect me. What should I do?</p>\n<p>The coach says: yeah, it’s tough. Focus on what you can control. Look at you — you’re pale and out of shape. You should be outside more. How about jogging? Start by running just a mile a day. You will see, it’ll get better. Let’s circle back in two weeks.</p>\n<p>Two weeks later the man calls the coach: “Thank you so much! Huge improvement! I’m 14 miles away from home and I feel great!”</p>\n<hr>\n<p>The joke is on us. We think that running away from problems will make them go away — but it just moves the problems in space, because we take our problems with us wherever we go.</p>\n<p>The coach is right. Just a mile a day creates a <em>distance</em> between you and the problem and makes you the best person to solve it.</p>\n<p><strong>I think the main goal of AI is to help us maintain stealth while we keep adding mileage between us and our problems.</strong></p>\n<p>The AI-DX version of this: AI doesn’t solve your problems. It gives you the space — the mile of breathing room — to become the person who can solve them. The developer who uses AI well is not offloading thinking. They’re buying themselves distance from the noise so the signal can get louder.</p>";

				const frontmatter = {"title":"The Mile Metaphor","date":"2026-02-04","tags":["ai","philosophy","metaphor","dx"],"description":"I think the main goal of AI is to help us maintain stealth while we keep adding mileage between us and our problems."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/ai-dx.org/src/content/articles/the-mile-metaphor.md";
				const url = undefined;
				function rawContent() {
					return "\nA man complains to his coach: My son is doing poorly in school, my mother-in-law is living with us and giving me hell, my wife does not respect me. What should I do?\n\nThe coach says: yeah, it's tough. Focus on what you can control. Look at you — you're pale and out of shape. You should be outside more. How about jogging? Start by running just a mile a day. You will see, it'll get better. Let's circle back in two weeks.\n\nTwo weeks later the man calls the coach: \"Thank you so much! Huge improvement! I'm 14 miles away from home and I feel great!\"\n\n---\n\nThe joke is on us. We think that running away from problems will make them go away — but it just moves the problems in space, because we take our problems with us wherever we go.\n\nThe coach is right. Just a mile a day creates a *distance* between you and the problem and makes you the best person to solve it.\n\n**I think the main goal of AI is to help us maintain stealth while we keep adding mileage between us and our problems.**\n\nThe AI-DX version of this: AI doesn't solve your problems. It gives you the space — the mile of breathing room — to become the person who can solve them. The developer who uses AI well is not offloading thinking. They're buying themselves distance from the noise so the signal can get louder.\n";
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

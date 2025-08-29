globalThis.process ??= {}; globalThis.process.env ??= {};
async function getMod() {
						return import('./gears-of-war-reloaded_D6ch5_N4.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

export { defaultMod as default };

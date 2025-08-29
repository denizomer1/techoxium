globalThis.process ??= {}; globalThis.process.env ??= {};
async function getMod() {
						return import('./asus-rtx5090-30th-anniversary_6x5E-INQ.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

export { defaultMod as default };

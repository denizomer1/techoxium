globalThis.process ??= {}; globalThis.process.env ??= {};
const contentModules = new Map([
["src/content/blog/asus-rtx5090-30th-anniversary.mdoc", () => import('./asus-rtx5090-30th-anniversary_Cej17sqG.mjs')],
["src/content/blog/apple-september-9-event.mdoc", () => import('./apple-september-9-event_Du3ZO9fe.mjs')],
["src/content/blog/gears-of-war-reloaded.mdoc", () => import('./gears-of-war-reloaded_CKhZ9hae.mjs')],
["src/content/blog/china-brain-computer-interface.mdoc", () => import('./china-brain-computer-interface_6_D_itWz.mjs')],
["src/content/blog/rog-xbox.mdoc", () => import('./rog-xbox_MS7y8FHE.mjs')],
["src/content/blog/windows-11-kb5063878-ssd-detailed-analysis.mdoc", () => import('./windows-11-kb5063878-ssd-detailed-analysis_CMY24anR.mjs')],
["src/content/blog/social-media.mdoc", () => import('./social-media_BE-pcaxZ.mjs')],
["src/content/blog/whatsapp-ai-writing-help.mdoc", () => import('./whatsapp-ai-writing-help_q0P5Mu02.mjs')],
["src/content/blog/gamescom-2025.mdoc", () => import('./gamescom-2025_BTpazAz4.mjs')],
["src/content/blog/ps6-series-announcement.mdoc", () => import('./ps6-series-announcement_CkmN8tak.mjs')],
["src/content/blog/en/apple-september-9-event.mdoc", () => import('./apple-september-9-event_CroN8eWW.mjs')],
["src/content/blog/en/china-brain-computer-interface.mdoc", () => import('./china-brain-computer-interface_BHFCzszG.mjs')],
["src/content/blog/en/asus-rtx5090-30th-anniversary.mdoc", () => import('./asus-rtx5090-30th-anniversary_BWA6bMHS.mjs')],
["src/content/blog/en/gears-of-war-reloaded.mdoc", () => import('./gears-of-war-reloaded_-XuWw3Cv.mjs')],
["src/content/blog/en/gamescom-2025.mdoc", () => import('./gamescom-2025_u93k9k4W.mjs')],
["src/content/blog/en/whatsapp-ai-writing-help.mdoc", () => import('./whatsapp-ai-writing-help_8ICC4GHr.mjs')],
["src/content/blog/en/windows-11-kb5063878-ssd-detailed-analysis.mdoc", () => import('./windows-11-kb5063878-ssd-detailed-analysis_0NLpB5PN.mjs')],
["src/content/blog/en/ps6-series-announcement.mdoc", () => import('./ps6-series-announcement_DVBCw8mf.mjs')],
["src/content/blog/en/social-media.mdoc", () => import('./social-media_4PxDN6KB.mjs')],
["src/content/blog/en/rog-xbox.mdoc", () => import('./rog-xbox_DCE8t5CS.mjs')],
["src/content/blog/windows-11-kb5063878-ssd-issues.mdoc", () => import('./windows-11-kb5063878-ssd-issues_BcUrP8t6.mjs')],
["src/content/blog/en/windows-11-kb5063878-ssd-issues.mdoc", () => import('./windows-11-kb5063878-ssd-issues_BjW7oIYw.mjs')]]);

export { contentModules as default };

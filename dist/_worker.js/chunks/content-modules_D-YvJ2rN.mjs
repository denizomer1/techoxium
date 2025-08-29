globalThis.process ??= {}; globalThis.process.env ??= {};
const contentModules = new Map([
["src/content/blog/apple-september-9-event.mdoc", () => import('./apple-september-9-event_BuxXlk6z.mjs')],
["src/content/blog/asus-rtx5090-30th-anniversary.mdoc", () => import('./asus-rtx5090-30th-anniversary_DJJ_x087.mjs')],
["src/content/blog/gamescom-2025.mdoc", () => import('./gamescom-2025_B7b_5fHp.mjs')],
["src/content/blog/china-brain-computer-interface.mdoc", () => import('./china-brain-computer-interface_Z5O8QuZf.mjs')],
["src/content/blog/gears-of-war-reloaded.mdoc", () => import('./gears-of-war-reloaded_CWz8EbUP.mjs')],
["src/content/blog/ps6-series-announcement.mdoc", () => import('./ps6-series-announcement_GhNHPQWg.mjs')],
["src/content/blog/rog-xbox.mdoc", () => import('./rog-xbox_CwDAXV9_.mjs')],
["src/content/blog/social-media.mdoc", () => import('./social-media_DkFmacFY.mjs')],
["src/content/blog/whatsapp-ai-writing-help.mdoc", () => import('./whatsapp-ai-writing-help_Drof5Unm.mjs')],
["src/content/blog/windows-11-kb5063878-ssd-detailed-analysis.mdoc", () => import('./windows-11-kb5063878-ssd-detailed-analysis_D7ylkux5.mjs')],
["src/content/blog/en/apple-september-9-event.mdoc", () => import('./apple-september-9-event_CcJG8wr6.mjs')],
["src/content/blog/en/china-brain-computer-interface.mdoc", () => import('./china-brain-computer-interface_DSCefOG5.mjs')],
["src/content/blog/en/asus-rtx5090-30th-anniversary.mdoc", () => import('./asus-rtx5090-30th-anniversary_BoM3pd13.mjs')],
["src/content/blog/en/gamescom-2025.mdoc", () => import('./gamescom-2025_CiJZKQEE.mjs')],
["src/content/blog/en/gears-of-war-reloaded.mdoc", () => import('./gears-of-war-reloaded_B9rYySnQ.mjs')],
["src/content/blog/en/ps6-series-announcement.mdoc", () => import('./ps6-series-announcement_Bbppe_9W.mjs')],
["src/content/blog/en/rog-xbox.mdoc", () => import('./rog-xbox_Yt097aes.mjs')],
["src/content/blog/en/social-media.mdoc", () => import('./social-media_C940dlqk.mjs')],
["src/content/blog/en/whatsapp-ai-writing-help.mdoc", () => import('./whatsapp-ai-writing-help_BogwAAbN.mjs')],
["src/content/blog/en/windows-11-kb5063878-ssd-detailed-analysis.mdoc", () => import('./windows-11-kb5063878-ssd-detailed-analysis_7EKO3YsG.mjs')],
["src/content/blog/windows-11-kb5063878-ssd-issues.mdoc", () => import('./windows-11-kb5063878-ssd-issues_YETmpNJo.mjs')],
["src/content/blog/en/windows-11-kb5063878-ssd-issues.mdoc", () => import('./windows-11-kb5063878-ssd-issues_D3q8e1J_.mjs')]]);

export { contentModules as default };

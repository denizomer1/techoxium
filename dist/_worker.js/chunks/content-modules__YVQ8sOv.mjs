globalThis.process ??= {}; globalThis.process.env ??= {};
const contentModules = new Map([
["src/content/blog/apple-september-9-event.mdoc", () => import('./apple-september-9-event_BYvODrEa.mjs')],
["src/content/blog/asus-rtx5090-30th-anniversary.mdoc", () => import('./asus-rtx5090-30th-anniversary_Bakj4a-k.mjs')],
["src/content/blog/gamescom-2025.mdoc", () => import('./gamescom-2025_BstObQel.mjs')],
["src/content/blog/china-brain-computer-interface.mdoc", () => import('./china-brain-computer-interface_DFnhXDWD.mjs')],
["src/content/blog/ps6-series-announcement.mdoc", () => import('./ps6-series-announcement_Db8Y9Avv.mjs')],
["src/content/blog/windows-11-kb5063878-ssd-detailed-analysis.mdoc", () => import('./windows-11-kb5063878-ssd-detailed-analysis_C3js1aud.mjs')],
["src/content/blog/rog-xbox.mdoc", () => import('./rog-xbox_BHaO1dwJ.mjs')],
["src/content/blog/social-media.mdoc", () => import('./social-media_DRE6V4QP.mjs')],
["src/content/blog/whatsapp-ai-writing-help.mdoc", () => import('./whatsapp-ai-writing-help_DlesJIAy.mjs')],
["src/content/blog/gears-of-war-reloaded.mdoc", () => import('./gears-of-war-reloaded_CvJMTwyO.mjs')],
["src/content/blog/en/apple-september-9-event.mdoc", () => import('./apple-september-9-event_BrDx2XUt.mjs')],
["src/content/blog/en/asus-rtx5090-30th-anniversary.mdoc", () => import('./asus-rtx5090-30th-anniversary_C08fXp5d.mjs')],
["src/content/blog/en/china-brain-computer-interface.mdoc", () => import('./china-brain-computer-interface_B3INi9eB.mjs')],
["src/content/blog/en/gears-of-war-reloaded.mdoc", () => import('./gears-of-war-reloaded_CrxKiVKF.mjs')],
["src/content/blog/en/ps6-series-announcement.mdoc", () => import('./ps6-series-announcement_DI9BF64F.mjs')],
["src/content/blog/en/social-media.mdoc", () => import('./social-media_BT4GU_TJ.mjs')],
["src/content/blog/en/whatsapp-ai-writing-help.mdoc", () => import('./whatsapp-ai-writing-help_Bx7ChSf5.mjs')],
["src/content/blog/en/rog-xbox.mdoc", () => import('./rog-xbox_DaV-Z2wT.mjs')],
["src/content/blog/en/windows-11-kb5063878-ssd-detailed-analysis.mdoc", () => import('./windows-11-kb5063878-ssd-detailed-analysis_DUlckq--.mjs')],
["src/content/blog/en/gamescom-2025.mdoc", () => import('./gamescom-2025_DkxEdUOu.mjs')],
["src/content/blog/windows-11-kb5063878-ssd-issues.mdoc", () => import('./windows-11-kb5063878-ssd-issues_DKSLKMfS.mjs')],
["src/content/blog/en/windows-11-kb5063878-ssd-issues.mdoc", () => import('./windows-11-kb5063878-ssd-issues_DMhF6oHp.mjs')]]);

export { contentModules as default };

---
title: "Windows 11 24H2 (KB5063878) Is Causing New Different Problems"
description: "Detailed analysis of serious SSD problems caused by Windows 11 KB5063878 update and solutions"
pubDate: "2025-08-28"
heroImage: "/windows-11-24h2.jpg"
tags: ["windows-11", "kb5063878", "ssd", "phison", "data-loss", "system-error"]
---

Windows 11's 24H2 (KB5063878) update is causing serious problems, especially during large file write operations. Users report that SSDs are disappearing from the system, data corruption, and the system can completely crash.

## Issue Details

This update is Microsoft's KB5063878 update released to fix sign-in delays on new devices. However, many users have started experiencing serious SSD issues after the update.

### Most Commonly Reported Problems:

- **SSDs Disappearing from System**: SSD drives become invisible in Disk Management after the update
- **Data Corruption**: Data loss and corruption during large file operations
- **System Crashes**: Sudden freezes and blue screen errors (BSOD)
- **Performance Degradation**: Significant slowdown in SSD speeds

## Most At-Risk SSDs

These problems are most prominent with SSDs that have Phison controllers. Brands with this controller include:
- Samsung (some models)
- Western Digital (some models)
- Crucial (some models)
- Other Phison-based SSDs

## Solution Recommendations

### Immediate Actions:
1. **Roll Back the Update**: Remove the update from Settings > System > Recovery
2. **Check Firmware Updates**: Download the latest firmware updates from your SSD manufacturer's website
3. **Run Disk Check**: Scan for disk errors using `chkdsk /f` command

### Long-term Solutions:
- Delay the update on critical systems
- Keep your data backups current
- Wait for official fixes from Microsoft or SSD manufacturers

## User Experiences

Many users are sharing similar issues on forums:
- "My SSD completely disappeared after the update"
- "System freezes when copying large files"
- "My data got corrupted, couldn't recover it"

These issues have not yet been officially acknowledged by Microsoft. Until an official fix is released, users with Phison controller SSDs are advised to delay the update.

**Warning**: This article is based on user reports. If you have critical data, always backup before updating.

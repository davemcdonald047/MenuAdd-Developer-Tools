// ==================================================
// File: src/headerManager.ts
// Updated: July 01, 2026 11:20 AM
// Purpose:
//     Builds and updates standard Python file headers.
// ==================================================

import * as path from "path";

export class HeaderManager {

    public static buildHeader(
        workspaceRoot: string,
        fileName: string
    ): string {

        const relativePath = path
            .relative(workspaceRoot, fileName)
            .replace(/\\/g, "/");

        const updated = this.currentDateTime();

        return [
            "# ==================================================",
            `# File: ${relativePath}`,
            `# Updated: ${updated}`,
            "# Purpose:",
            "#",
            "# ==================================================",
            ""
        ].join("\n");
    }

    private static currentDateTime(): string {

        const now = new Date();

        return now.toLocaleString(
            "en-CA",
            {
                year: "numeric",
                month: "long",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            }
        );
    }
}
// ==================================================
// File: src/core/header_builder.ts
// Updated: July 01, 2026 3:35 PM
// Purpose:
//     Builds standard source file headers.
// ==================================================

import * as path from "path";

export class HeaderBuilder {

    public static build(

        workspaceRoot: string,

        fileName: string

    ): string {

        const relativePath = path
            .relative(workspaceRoot, fileName)
            .replace(/\\/g, "/");

        const now = new Date();

        const updated = now.toLocaleString();

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

}
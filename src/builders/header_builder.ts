// ==================================================
// File: src/services/header_builder.ts
// Updated: June 30, 2026 9:15 PM
// Purpose:
//     Builds the standard MenuApp file header.
// ==================================================

import * as vscode from "vscode";

 import { ProjectHelper } from "../helpers/project_helper";

export class HeaderBuilder {

    // ==================================================
    // BUILD HEADER
    // ==================================================

    public static build(

        document: vscode.TextDocument

    ): string {

        const project = ProjectHelper.getProjectName(

            document

        );

        const file = ProjectHelper.getRelativeFileName(

            document

        );

        const updated = this.getCurrentDateTime();

        return [

            "# ==================================================",
            `# Project: ${project}`,
            `# File: ${file}`,
            `# Updated: ${updated}`,
            "# Purpose:",
            "#",
            "# ==================================================",
            ""

        ].join("\n");

    }

    // ==================================================
    // CURRENT DATE/TIME
    // ==================================================

    private static getCurrentDateTime(): string {

        const now = new Date();

        const months = [
            "January","February","March","April","May","June",
            "July","August","September","October","November","December"
        ];

        const month = months[now.getMonth()];

        const day = now.getDate().toString().padStart(2, "0");

        const year = now.getFullYear();

        let hour = now.getHours();

        const minute = now.getMinutes().toString().padStart(2, "0");

        const ampm = hour >= 12 ? "PM" : "AM";

        hour = hour % 12;

        if (hour === 0) {

            hour = 12;

        }

        return `${month} ${day}, ${year} ${hour}:${minute} ${ampm}`;

    }

}
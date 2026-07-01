// ==================================================
// Project: MenuApp-Developer-Tools
// File: src/helpers/header_updater.ts
// Updated: July 1, 2026 03:00 AM
//
// Purpose:
//     Updates an existing file header by
//     refreshing the "Updated:" timestamp.
//
// ==================================================

import * as vscode from "vscode";

export class HeaderUpdater {

    // ==================================================
    // UPDATE HEADER
    // ==================================================

    public static async updateHeader(

        document: vscode.TextDocument

    ): Promise<boolean> {

        const text = document.getText();

        const lines = text.split(/\r?\n/);

        let updatedLine = -1;

        // ----------------------------------------
        // Find Updated: line
        // ----------------------------------------

        for (let i = 0; i < Math.min(lines.length, 20); i++) {

            if (lines[i].startsWith("# Updated:")) {

                updatedLine = i;

                break;

            }

        }

        if (updatedLine === -1) {

            return false;

        }

        // ----------------------------------------
        // Replace timestamp
        // ----------------------------------------

        lines[updatedLine] = `# Updated: ${this.getCurrentDateTime()}`;

        const edit = new vscode.WorkspaceEdit();

        edit.replace(

            document.uri,

            new vscode.Range(

                new vscode.Position(0, 0),

                document.lineAt(document.lineCount - 1).range.end

            ),

            lines.join("\n")

        );

        await vscode.workspace.applyEdit(

            edit

        );

        return true;

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
// ==================================================
// Project: MenuApp-Developer-Tools
// File: src/helpers/header_updater.ts
// Updated: July 1, 2026 03:13 AM
//
// Purpose:
//     Synchronizes the Project, File and
//     Updated fields of an existing header.
//
// ==================================================

import * as vscode from "vscode";
import { DateTimeHelper } from "./date_time_helper";
import { ProjectHelper } from "./project_helper";

export class HeaderUpdater {

    // ==================================================
    // UPDATE HEADER
    // ==================================================

    public static async updateHeader(

        document: vscode.TextDocument

    ): Promise<boolean> {

        const text = document.getText();

        const lines = text.split(/\r?\n/);

        const project = ProjectHelper.getProjectName(

            document

        );

        const file = ProjectHelper.getRelativeFileName(

            document

        );

        for (let i = 0; i < Math.min(lines.length, 20); i++) {

            if (lines[i].startsWith("# Project:")) {

                lines[i] = `# Project: ${project}`;

            }

            else if (lines[i].startsWith("# File:")) {

                lines[i] = `# File: ${file}`;

            }

            else if (lines[i].startsWith("# Updated:")) {

                lines[i] = `# Updated: ${DateTimeHelper.getCurrentDateTime()}`;

            }

        }

        const edit = new vscode.WorkspaceEdit();

        edit.replace(

            document.uri,

            new vscode.Range(

                new vscode.Position(0, 0),

                document.lineAt(

                    document.lineCount - 1

                ).range.end

            ),

            lines.join("\n")

        );

        await vscode.workspace.applyEdit(

            edit

        );

        return true;

    }
}
    
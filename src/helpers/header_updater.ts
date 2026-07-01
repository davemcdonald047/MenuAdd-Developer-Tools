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
import { DateTimeHelper } from "../helpers/date_time_helper";
import { ProjectHelper } from "../helpers/project_helper";
import { LanguageHelper } from "../helpers/language_helper";

export class HeaderUpdater {

    // ==================================================
    // UPDATE HEADER
    // ==================================================

    public static async updateHeader(

        document: vscode.TextDocument

    ): Promise<boolean> {

        const text = document.getText();

        const lines = text.split(/\r?\n/);

        const comment = LanguageHelper.getCommentPrefix(document);

        const language = LanguageHelper.getLanguageName(document);
        const project = ProjectHelper.getProjectName(

            document

        );

        const file = ProjectHelper.getRelativeFileName(

            document

        );

        for (let i = 0; i < Math.min(lines.length, 20); i++) {

            const line = lines[i]
                .replace(/^#\s*/, "")
                .replace(/^\/\/\s*/, "");

            if (line.startsWith("Project:")) {

                lines[i] = `${comment} Project: ${project}`;

            }

            else if (line.startsWith("File:")) {

                lines[i] = `${comment} File: ${file}`;

            }

            else if (line.startsWith("Updated:")) {

                lines[i] = `${comment} Updated: ${DateTimeHelper.getCurrentDateTime()}`;

            }

            else if (line.startsWith("Language:")) {

                lines[i] = `${comment} Language: ${language}`;

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
    
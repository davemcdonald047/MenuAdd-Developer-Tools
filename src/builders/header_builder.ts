// ==================================================
// File: src/services/header_builder.ts
// Updated: June 30, 2026 9:15 PM
// Purpose:
//     Builds the standard MenuApp file header.
// ==================================================

import * as vscode from "vscode";
import { DateTimeHelper } from "../helpers/date_time_helper";
import { ProjectHelper } from "../helpers/project_helper";
import { LanguageHelper } from "../helpers/language_helper";

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

        const comment = LanguageHelper.getCommentPrefix(

            document

        );

        const language = LanguageHelper.getLanguageName(

            document

        );

        const created = DateTimeHelper.getCurrentDateTime();

        const updated = created;

        return [

            `${comment} ==================================================`,
            `${comment} Project: ${project}`,
            `${comment} File: ${file}`,
            `${comment} Created: ${created}`,
            `${comment} Updated: ${updated}`,
            `${comment} Language: ${language}`,
            `${comment} Purpose:`,
            `${comment}`,
            `${comment} ==================================================`,
            ""

        ].join("\n");
    }
}
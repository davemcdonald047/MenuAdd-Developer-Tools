// ==================================================
// Project: MenuApp-Developer-Tools
// File: src/helpers/language_helper.ts
// Updated: July 01, 2026 11:44 AM
//
// Purpose:
//     Provides language-specific information
//     used by the extension.
//
// ==================================================

import * as vscode from "vscode";

export class LanguageHelper {

    // ==================================================
    // COMMENT PREFIX
    // ==================================================

    public static getCommentPrefix(

        document: vscode.TextDocument

    ): string {

        switch (document.languageId) {

            case "python":
                return "#";

            case "typescript":
            case "javascript":
            case "c":
            case "cpp":
            case "csharp":
                return "//";

            default:
                return "";

        }

    }

    // ==================================================
    // LANGUAGE NAME
    // ==================================================

    public static getLanguageName(

        document: vscode.TextDocument

    ): string {

        switch (document.languageId) {

            case "python":
                return "Python";

            case "typescript":
                return "TypeScript";

            case "javascript":
                return "JavaScript";

            case "c":
                return "C";

            case "cpp":
                return "C++";

            case "csharp":
                return "C#";

            default:
                return document.languageId;

        }

    }

    // ==================================================
    // HEADER SUPPORTED
    // ==================================================

    public static supportsHeader(

        document: vscode.TextDocument

    ): boolean {

        return this.getCommentPrefix(

            document

        ) !== "";

    }

}
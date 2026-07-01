// ==================================================
// File: src/services/header_service.ts
// Updated: July 01, 2026
// Purpose:
//     Handles automatic header processing.
// ==================================================

import * as vscode from "vscode";

export class HeaderService {

    // ==================================================
    // PROCESS DOCUMENT
    // ==================================================

    public static processDocument(

        document: vscode.TextDocument

    ): void {

        // ----------------------------------------
        // Only Python files
        // ----------------------------------------

        if (

            document.languageId !== "python"

        ) {

            return;

        }

        // ----------------------------------------
        // Only empty files
        // ----------------------------------------

        if (

            document.getText().trim().length > 0

        ) {

            return;

        }

        console.log(

            "Empty Python File:",

            document.fileName

        );

    }

}
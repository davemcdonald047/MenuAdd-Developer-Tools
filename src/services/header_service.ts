// ==================================================
// File: src/services/header_service.ts
// Updated: July 01, 2026 2:45 PM
// Purpose:
//     Handles automatic header processing.
// ==================================================

import * as vscode from "vscode";

import { HeaderBuilder } from "../core/header_builder";

export class HeaderService {

    // ==================================================
    // PROCESS DOCUMENT
    // ==================================================

    public static processDocument(

        document: vscode.TextDocument

    ): void {

        // ----------------------------------------
        // Python files only
        // ----------------------------------------

        if (

            !this.isSupportedLanguage(

                document

            )

        ) {

            return;

        }

        // ----------------------------------------
        // Empty files only
        // ----------------------------------------

        if (

            !this.isEmptyDocument(

                document

            )

        ) {

            return;

        }

        // ----------------------------------------
        // Build Header
        // ----------------------------------------

        const header = HeaderBuilder.build(

            document

        );

        console.log(

            "======================================"

        );

        console.log(

            "Generated Header"

        );

        console.log(

            "======================================"

        );

        console.log(

            header

        );

    }

    // ==================================================
    // SUPPORTED LANGUAGE
    // ==================================================

    private static isSupportedLanguage(

        document: vscode.TextDocument

    ): boolean {

        return (

            document.languageId === "python"

        );

    }

    // ==================================================
    // EMPTY DOCUMENT
    // ==================================================

    private static isEmptyDocument(

        document: vscode.TextDocument

    ): boolean {

        return (

            document.getText().trim().length === 0

        );

    }

}
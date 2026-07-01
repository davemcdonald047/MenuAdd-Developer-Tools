// ==================================================
// File: src/services/header_service.ts
// Updated: June 30, 2026 9:30 PM
// Purpose:
//     Handles automatic header processing.
// ==================================================

import * as vscode from "vscode";

import { HeaderBuilder } from "../builders/header_builder";

export class HeaderService {

    // ==================================================
    // PROCESS DOCUMENT
    // ==================================================

    public static async processDocument(

        document: vscode.TextDocument

    ): Promise<void> {

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

        const editor = vscode.window.activeTextEditor;

        if (

            !editor

        ) {

            return;

        }

        if (

            editor.document !== document

        ) {

            return;

        }

        const header = HeaderBuilder.build(

            document

        );

        await editor.edit(

            edit => {

                edit.insert(

                    new vscode.Position(

                        0,

                        0

                    ),

                    header

                );

            }

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
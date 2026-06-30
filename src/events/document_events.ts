// ==================================================
// File: src/events/document_events.ts
// Updated: July 01, 2026 11:54 AM
// Purpose:
//     Handles document events for the
//     MenuApp Developer Tools extension.
// ==================================================

import * as vscode from "vscode";

export class DocumentEvents {

    public static register(
        context: vscode.ExtensionContext
    ): void {

        // ----------------------------------------
        // Document Open
        // ----------------------------------------

        context.subscriptions.push(

            vscode.workspace.onDidOpenTextDocument(

                this.documentOpened

            )

        );

        // ----------------------------------------
        // Document Save
        // ----------------------------------------

        context.subscriptions.push(

            vscode.workspace.onDidSaveTextDocument(

                this.documentSaved

            )

        );

    }

    // ==================================================
    // DOCUMENT OPENED
    // ==================================================

    private static documentOpened(

        document: vscode.TextDocument

    ): void {

        console.log(

            "Opened:",

            document.fileName

        );

    }

    // ==================================================
    // DOCUMENT SAVED
    // ==================================================

    private static documentSaved(

        document: vscode.TextDocument

    ): void {

        console.log(

            "Saved:",

            document.fileName

        );

    }

}
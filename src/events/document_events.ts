// ==================================================
// File: src/events/document_events.ts
// Updated: July 01, 2026 12:45 PM
// Purpose:
//     Registers document events for the
//     MenuApp Developer Tools extension.
// ==================================================

import * as vscode from "vscode";

import { HeaderService } from "../services/header_service";

export class DocumentEvents {

    // ==================================================
    // REGISTER EVENTS
    // ==================================================

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

            "SAVE EVENT"

        );

        console.log(

            "Saved:",

            document.fileName

        );

        HeaderService.processDocument(

            document

        );

    }

}
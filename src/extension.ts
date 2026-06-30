// ==================================================
// File: src/extension.ts
// Updated: June 30, 2026 11:57 AM
// Purpose:
//     Handles document events.
// ==================================================
import * as vscode from "vscode";

import { DocumentEvents } from "./events/document_events";

export function activate(

    context: vscode.ExtensionContext

): void {

    console.log(

        "MenuApp Developer Tools Loaded"

    );

    DocumentEvents.register(

        context

    );

}

export function deactivate(): void {

}
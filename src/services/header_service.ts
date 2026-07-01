// ==================================================
// Project: MenuApp-Developer-Tools
// File: src/services/header_service.ts
// Updated: July 1, 2026 02:43 AM
//
// Purpose:
//     Processes saved documents and inserts
//     a standard header when one does not
//     already exist.
// ==================================================

import * as vscode from "vscode";

import { HeaderBuilder } from "../builders/header_builder";
import { HeaderDetector } from "../events/headerdetector";
import { HeaderUpdater } from "../helpers/header_updater";

export class HeaderService {

    // ==================================================
    // PROCESS DOCUMENT
    // ==================================================

    public static async processDocument(

        document: vscode.TextDocument

    ): Promise<void> {

        // Only process Python files

        if (document.languageId !== "python") {

            return;

        }

        const text = document.getText();

        // Header already exists

        if (HeaderDetector.hasHeader(text)) {

            await HeaderUpdater.updateHeader(document);

            return;

}       

        const header = HeaderBuilder.build(

            document

        );

        const edit = new vscode.WorkspaceEdit();

        edit.insert(

            document.uri,

            new vscode.Position(0, 0),

            header

        );

        await vscode.workspace.applyEdit(

            edit

        );

    }

}
// ==================================================
// File: src/helpers/project_helper.ts
// Updated: June 30, 2026 8:45 PM
// Purpose:
//     Provides project information used
//     throughout the extension.
// ==================================================

import * as path from "path";
import * as vscode from "vscode";

export class ProjectHelper {

    // ==================================================
    // PROJECT NAME
    // ==================================================

    public static getProjectName(

        document: vscode.TextDocument

    ): string {

        const workspace = vscode.workspace.getWorkspaceFolder(

            document.uri

        );

        if (!workspace) {

            return "Unknown Project";

        }

        const packageFile = path.join(

            workspace.uri.fsPath,

            "package.json"

        );

        try {

            const fs = require("fs");

            const json = JSON.parse(

                fs.readFileSync(

                    packageFile,

                    "utf8"

                )

            );

            return (

                json.displayName ??
                json.name ??
                workspace.name

            );

        }

        catch {

            return workspace.name;

        }

    }

    // ==================================================
    // RELATIVE FILE NAME
    // ==================================================

    public static getRelativeFileName(

        document: vscode.TextDocument

    ): string {

        const workspace = vscode.workspace.getWorkspaceFolder(

            document.uri

        );
       
        if (!workspace) {

            return path.basename(

                document.fileName

            );

        }

        return path.relative(

            workspace.uri.fsPath,

            document.fileName

        ).replace(/\\/g, "/");

    }

}
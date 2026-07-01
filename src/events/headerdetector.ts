// Project: MenuApp-Developer-tools
// File: scr/services/headerDetector.ts
// Upatedd: July 1, 2026 02:24 AM
// Purpose:
//     Detect whether a source file already contains one of
//     our generated file headers.
//
// Architecture:
//     HeaderService
//          │
//          ▼
//     HeaderDetector
//
//==============================================================

export class HeaderDetector {
    /**
     * Returns true if the document already contains one of
     * our standard generated headers.
     */
    public static hasHeader(documentText: string): boolean {

        if (!documentText) {
            return false;
        }

        // Only inspect the beginning of the file.
        const text = documentText.substring(0, 2000);

        const headerMarkers = [
            "File:",
            "Purpose:",
            "Architecture:",
            "Updated:",
            "Created:"
        ];

        let matches = 0;

        for (const marker of headerMarkers) {
            if (text.includes(marker)) {
                matches++;
            }
        }

        // Require at least three markers to avoid false positives.
        return matches >= 3;
    }
}
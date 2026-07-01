// ==================================================
// Project: MenuApp-Developer-Tools
// File: src/helpers/date_time_helper.ts
// Updated: July 1, 2026 9:47 AM
//
// Purpose:
//     Provides a standard date/time format
//     used throughout the extension.
//
// ==================================================

export class DateTimeHelper {

    // ==================================================
    // CURRENT DATE/TIME
    // ==================================================

    public static getCurrentDateTime(): string {

        const now = new Date();

        const months = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        const month = months[now.getMonth()];

        const day = now.getDate().toString().padStart(2, "0");

        const year = now.getFullYear();

        let hour = now.getHours();

        const minute = now.getMinutes().toString().padStart(2, "0");

        const ampm = hour >= 12 ? "PM" : "AM";

        hour = hour % 12;

        if (hour === 0) {

            hour = 12;

        }

        return `${month} ${day}, ${year} ${hour}:${minute} ${ampm}`;

    }

}
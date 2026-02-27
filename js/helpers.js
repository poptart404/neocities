// Helper Functions
// Calculate the number of days between two provided days
function daysPassed(newDay, oldDay) {
    // The number of milliseconds in one day in UTC
    const oneDay = 1000 * 60 * 60 * 24;

    // Convert both dates to UTC timestamps (at midnight)
    const newDay_utc = Date.UTC(newDay.getFullYear(), newDay.getMonth(), newDay.getDate());
    const oldDay_utc = Date.UTC(oldDay.getFullYear(), oldDay.getMonth(), oldDay.getDate());

    // Calculate the difference in milliseconds and convert to days
    // Use Math.abs to ensure a positive result
    const difference_ms = Math.abs(oldDay_utc - newDay_utc);
    
    return Math.floor(difference_ms / oneDay);
};
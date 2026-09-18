// Question No. 1
function describeValue(value) {
    const type = typeof value;
    if (value) {
        return `${type} | truthy`;
    } else {
        return `${type} | falsy`;
    }
}
// Question No. 2
function getDayType(day) {
    const dayName = day.toLowerCase();
    switch (dayName) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default: return "Invalid Day";
    }
}
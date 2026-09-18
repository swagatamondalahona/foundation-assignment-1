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
// Question No. 3
function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }
    if (username.includes(" ")) {
        return "No Space Allowed";
    }
    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    return "Available";
}
// Question No. 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;
    if (distance > 2) {
        fare = fare + (distance - 2) * 15;
    }
    fare = fare + waitingMinutes * 2;
    if (isNight) {
        fare = fare * 1.20;
    }
    return fare;
}
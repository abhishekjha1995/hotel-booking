export function fetchRooms(endpoint) {
    return Promise.resolve({
        data: ["101", "102", "103", "201", "202", "203", "301", "302", "303"]
    })
}

export function saveBooking(endpoint, payload) {
    const dataString = localStorage.getItem("records"),
        records = dataString ? JSON.parse(dataString) : [];

    records.push(payload);

    localStorage.setItem("records", JSON.stringify(records));

    return Promise.resolve({
        data: "record added successfully"
    })
}

export function checkRoomNo(endpoint, payload) {
    const dataString = localStorage.getItem("records"),
        records = dataString ? JSON.parse(dataString) : [],
        roomBooked = records.some(record => record.room === payload.room && record.date === payload.date);

    return Promise.resolve({
        data: !roomBooked
    })
}
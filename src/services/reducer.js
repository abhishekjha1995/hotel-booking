const initialState = {
    rooms: undefined,
    addRoom: undefined,
    roomCheck: undefined
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "GET_ROOMS_SUCCESS":
            return {
                ...state,
                rooms: payload
            }
        case "SAVE_ROOM_INFO":
            return {
                ...state,
                addRoom: payload
            }
        case "ROOM_CHECK_SUCCESS":
            return {
                ...state,
                roomCheck: payload
            }
        default:
            return state;
    }
}
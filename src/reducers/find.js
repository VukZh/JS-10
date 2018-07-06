export default function (state = '', action) {
    switch (action.type) {
        case 'FIND_CITY':
            return action.payload
        default:
            return state
    }
}
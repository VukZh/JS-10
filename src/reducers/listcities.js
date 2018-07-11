export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_CITY':
      return [...state, {
        name: action.payload.name,
        temp: action.payload.temp,
        humidity: action.payload.humidity,
        description: action.payload.description    
      }]
    default:
      return state
  }
}

  export default function (state = -1, action) {
      switch (action.type) {
          case 'CITY_FAVOR':
              return action.payload
          default:
              return state
      }
  }
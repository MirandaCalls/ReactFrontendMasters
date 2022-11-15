// old state = Seattle
// action = { type: "CHANGE_LOCATION", payload: "SLC" }
//
// new state = "SLC"

export default function location(state = "Seattle, WA", action) {
  switch (action.type) {
    case "CHANGE_LOCATION":
      return action.payload;
    default:
      return state;
  }
}

const INITIAL_STATE = {
  darkMode: document.cookie
    .split(";")
    .some((item) => item.includes("dark_mode=true")),
};

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DARK_MODE":
      document.cookie = `dark_mode=${!state.darkMode};`;
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}

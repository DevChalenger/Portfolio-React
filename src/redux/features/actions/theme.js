export const themeActions = {
  toggle: (draft) => {
    console.log(draft);
    return draft === "light" ? "dark" : "light";
  },
  set: (draft, action) => {
    return action.payload;
  },
};

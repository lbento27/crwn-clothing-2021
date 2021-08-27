import { UserActionsTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  //type: "SET_CURRENT_USER",
  type: UserActionsTypes.SET_CURRENT_USER,
  payload: user,
});

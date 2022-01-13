export const increment = () => {
  return { type: "INCREMENT" };
};
export const decrement = () => {
  return { type: "DECREMENT" };
};
export const logIn = () => {
  return { type: "SIGN_IN" };
};
export const logOut = () => {
  return { type: "SIGN_OUT" };
};
export const myEmail = (mail) => {
  return {
    type: "MOUNT",
    payload: mail,
  };
};
export const dismountMyEmail = () => {
  return {
    type: "DISMOUNT",
  };
};

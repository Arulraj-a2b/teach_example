export const buttonHelper = (types, disabled) => {
  let textColor = "primary";
  if (types === "primary") {
    textColor = "primary";
  }

  // if (disabled && types === "secondary") {
  //   textColor = "theme";
  // } else if (disabled && types !== "secondary") {
  //   textColor = "white";
  // }

  return { textColor };
};

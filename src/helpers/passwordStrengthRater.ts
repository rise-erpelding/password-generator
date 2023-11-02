import { PasswordOptions } from "./passwordGenerator";

export const ratePasswordStrength = (passwordOptions: PasswordOptions) => {
  const { length } = passwordOptions;

  // since booleans in obj relate to char type, counting # of true booleans gives us # of char types
  const charTypesCount = countNumberOfTrueBooleans(passwordOptions);

  // if at least 14 characters in length and contains at least 3 char types, it is strong
  const strongFourteenThree = length >= 14 && charTypesCount >= 3;

  // if at least 12 characters in length and contains at least 4 char types, it is strong
  const strongTwelveFour = length >= 12 && charTypesCount >= 4;

  // if at least 12 characters in length and contains at least 2 char types, it is medium
  const mediumTwelveTwo = length >= 12 && charTypesCount >= 2;

  // if at least 10 characters in length and contains at least 3 char types, it is medium
  const mediumTenThree = length >= 10 && charTypesCount >= 3;

  if (strongFourteenThree || strongTwelveFour) {
    return 'strong';
  } else if (mediumTwelveTwo || mediumTenThree) {
    return 'medium';
  } else {
    return 'weak';
  }
}

const countNumberOfTrueBooleans = (obj: PasswordOptions) => {
  let count = 0;
  for (const key in obj) {
    if (obj[key] === true) {
      count += 1;
    }
  }
  return count;
}

// EXAMPLE USAGE, save for writing tests later
// const exampleOptions1Strong = {length: 16, hasUppercase: true, hasLowercase: true, hasNumbers: true, hasSpecialCharacters: false};
// const exampleOptions2Strong = {length: 12, hasUppercase: true, hasLowercase: true, hasNumbers: true, hasSpecialCharacters: true};
// const exampleOptions3Medium = {length: 12, hasUppercase: true, hasLowercase: false, hasNumbers: false, hasSpecialCharacters: true};
// const exampleOptions4Medium = {length: 10, hasUppercase: true, hasLowercase: true, hasNumbers: true, hasSpecialCharacters: false};
// const exampleOptions5Weak = {length: 9, hasUppercase: true, hasLowercase: true, hasNumbers: true, hasSpecialCharacters: false};
// const exampleOptions6Weak = {length: 6, hasUppercase: true, hasLowercase: false, hasNumbers: true, hasSpecialCharacters: false};

// console.log(ratePasswordStrength(exampleOptions6Weak))

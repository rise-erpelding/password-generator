type PasswordOptions = {
  length: number;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumbers: boolean;
  hasSpecialCharacters: boolean;
}

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const specialCharacters = "!@#$%^&*()-_=+<>?~";

/**
 * Creates a list of all the character types that can be included in the password.
 * Throws an error if none of the passwordOptions are set to true.
 *
 * @param {PasswordOptions} passwordOptions - Options (character types to include) for generating
 * the password.
 * @returns array of strings, one string for each character type we want to include
 */
const getListOfCharacterTypes = (passwordOptions: PasswordOptions): string[] => {
  const { hasUppercase, hasLowercase, hasNumbers, hasSpecialCharacters } = passwordOptions;

  const eligibleCharacterTypes = [];
  if (hasUppercase) {
    eligibleCharacterTypes.push('uppercase');
  }
  if (hasLowercase) {
    eligibleCharacterTypes.push('lowercase');
  }
  if (hasNumbers) {
    eligibleCharacterTypes.push('numbers');
  }
  if (hasSpecialCharacters) {
    eligibleCharacterTypes.push('specialCharacters');
  }
  if (!eligibleCharacterTypes.length) {
    throw new Error('need at least one eligible character type');
  }
  return eligibleCharacterTypes;
}

/**
 * Generates a random index within the specified range.
 *
 * This function uses a secure random number generator if available in the browser,
 * falling back to the built-in Math.random() method if not available.
 *
 * @param {number} length - The upper bound (exclusive) for the random index.
 * @returns {number} A random index within the range [0, length).
 */
const getRandomIndex = (length: number): number => {
  if (typeof window !== "undefined" && window.crypto && window.crypto.getRandomValues) {
    const randomValues = new Uint32Array(1);
    // TODO: maybe look into this and see if we can require crypto instead
    window.crypto.getRandomValues(randomValues);
    return randomValues[0] % length;
  } else {
    return Math.floor(Math.random() * length);
  }
}

// get the character at the random index
const getRandomChar = (characters: string): string => {
  const randomIndex = getRandomIndex(characters.length);
  return characters.charAt(randomIndex);
}

/**
 * Picks which character type to use at random based on the user-selected character types to
 * include in the password.
 * The randomly selected character type will be used to determine the character type of the next
 * character while generating the password.
 * 
 * @param eligibleCharacterTypes 
 * @returns one string representing one index from the array of eligibleCharacterTypes
 */
const getRandomCharacterType = (eligibleCharacterTypes: string[]): string => {
  if (eligibleCharacterTypes.length === 0) {
    throw new Error('eligible character types array cannot be empty');
  }

  const randomIndex = getRandomIndex(eligibleCharacterTypes.length);
  return eligibleCharacterTypes[randomIndex];

}

// functions for getting a random character of a certain type
const getRandomUppercaseLetter = (): string => {
  return getRandomChar(uppercaseLetters);
}

const getRandomDigit = (): string =>  {
  return getRandomChar(digits);
}

const getRandomSpecialCharacter = (): string => {
  return getRandomChar(specialCharacters);
}

/**
 * Shuffles a string securely using cryptographic randomness (window.crypto) or falls back to Fisher-Yates shuffle.
 *
 * @param {string} stringToShuffle - The input string to shuffle.
 * @returns {string} The shuffled string.
 */
const secureShuffleString = (stringToShuffle: string): string => {
  // Convert the input string to an array of characters
  const charArray = stringToShuffle.split('');

  if (typeof window !== 'undefined' && window.crypto) {
    // Use window.crypto for secure shuffling
    const randomIndices = new Uint32Array(charArray.length);
    window.crypto.getRandomValues(randomIndices);

    // Create an array of objects with characters and random indices
    const charsWithIndices = charArray.map((char, index) => ({ char, index }));

    // Sort the array based on random indices
    charsWithIndices.sort((a, b) => a.index - b.index);

    // Extract the shuffled characters and join them into a string
    return charsWithIndices.map((obj) => obj.char).join('');
  } else {
    // Fall back to Fisher-Yates shuffle
    for (let i = charArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }

    return charArray.join('');
  }
};

const makeListOfEligibleCharacters = (eligibleCharacterTypes: string[]): string => {
  let eligibleCharacters = '';
  eligibleCharacterTypes.forEach(
    (characterType) => {
      switch (characterType) {
        case 'uppercase':
          eligibleCharacters = eligibleCharacters + uppercaseLetters;
          break;
        case 'lowercase':
          eligibleCharacters = eligibleCharacters + uppercaseLetters.toLowerCase();
          break;
        case 'numbers':
          eligibleCharacters = eligibleCharacters + digits;
          break;
        case 'specialCharacters':
          eligibleCharacters = eligibleCharacters + specialCharacters;
          break;
      }
    }
  )
  return eligibleCharacters;
}

/**
 * Generates a random password based on user preferences.
 * Assumes that at least one of the boolean fields is true.
 *
 * @param {PasswordOptions} passwordOptions - Options for generating the password.
 * @returns {string} The generated password.
 */
export const generatePassword = (passwordOptions: PasswordOptions): string => {
  // get the specified password length
  const { length } = passwordOptions;
  
  // construct array of eligible character types
  const eligibleCharacterTypes = getListOfCharacterTypes(passwordOptions);

  let password = '';
  
  // first satisfy character type requirements
  // iterate through eligible character types and choose one char for each
  eligibleCharacterTypes.forEach(
    (characterType) => {
      switch (characterType) {
        case 'uppercase':
          password = password + getRandomUppercaseLetter();
          break;
        case 'lowercase':
          password = password + getRandomUppercaseLetter().toLowerCase();
          break;
        case 'numbers':
          password = password + getRandomDigit();
          break;
        case 'specialCharacters':
          password = password + getRandomSpecialCharacter();
          break;
      }
    }
  );

  // now stop and check length
  // if we meet the length exactly then we're done
  if (password.length === length) {
    return password;
  }

  // if we exceeded the length, let's shuffle and then trim to the length we want
  if (password.length > length) {
    password = secureShuffleString(password);
    password = password.slice(0, length);
    return password;
  }

  // otherwise our password isn't the length we want yet
  // make a list of eligible characters
  const eligibleCharacters = makeListOfEligibleCharacters(eligibleCharacterTypes);
  // pick random characters from it and keep adding to our password
  while (password.length < length) {
    password = password + getRandomChar(eligibleCharacters);
  }
  password = secureShuffleString(password);
  return password;
}

'use strict';

export function reverse(stringToBeReversed: String): String {
  let newStringArray: String[] = [''];

  for (let i: number = stringToBeReversed.length; i >= 0; --i) {
    newStringArray.push(stringToBeReversed.charAt(i).toString());
  }

  return newStringArray.join('');
}

export function beSarcastic(stringToBeSarcastisized: String): String {
  let sarcastisizedStringArray: String[] = [''];

  for (let i: number = 0; i < stringToBeSarcastisized.length; i++) {
    if (i % 2 == 0) {
      sarcastisizedStringArray.push(
        stringToBeSarcastisized.charAt(i).toUpperCase().toString()
      );
    } else {
      sarcastisizedStringArray.push(
        stringToBeSarcastisized.charAt(i).toString()
      );
    }
  }

  return sarcastisizedStringArray.join('');
}

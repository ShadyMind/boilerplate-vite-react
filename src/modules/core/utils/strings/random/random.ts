export type formatCodeFN = (code: number) => number;

const codeToBinary: formatCodeFN = (code) => (code % 2) + 48;
const codeToNumericalCode: formatCodeFN = (code) => (code % 10) + 48;
const codeToLowerCaseLetterCode: formatCodeFN = (code) => (code % 26) + 97;
const codeToLowerAlphaNumericalCode: formatCodeFN = (code) => {
  let c = code % 36 + 48;

  return c > 57 ? c + 39 : c;
};

export const randomFormattedFactory = (formatFn: formatCodeFN, _length: number = 8) => {
  return (length: number = _length): string => String.fromCharCode(
    ...Array.from(
      crypto.getRandomValues(new Uint8Array(length))
    ).map(formatFn)
  );
};

export const binaryRandom = randomFormattedFactory(codeToBinary, 64);
export const numberRandom = randomFormattedFactory(codeToNumericalCode, 16);
export const lowerAlphaRandom = randomFormattedFactory(codeToLowerCaseLetterCode, 12);
export const lowerAlphaNumberRandom = randomFormattedFactory(codeToLowerAlphaNumericalCode, 8);

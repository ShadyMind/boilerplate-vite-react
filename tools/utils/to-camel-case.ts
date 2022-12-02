export const toCamelCase = (text: string, firstLowercase = false) =>
  text.replace(/(?:^|-)[a-z0-9]/g, (inp) => {
    let out = inp;

    if (inp.at(0) === '-') {
      return inp.slice(1).toUpperCase();
    }

    if (!firstLowercase) {
      return out.toUpperCase();
    }

    return out;
  });

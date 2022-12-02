import { numberRandom, lowerAlphaNumberRandom, lowerAlphaRandom } from '#/utils/strings';

export const uid = (): string => `${
  numberRandom(6)
}-${
  lowerAlphaRandom(8)
}-${
  lowerAlphaNumberRandom(8)
}`;

import { numberRandom, lowerAlphaNumberRandom, lowerAlphaRandom } from '#/utils/strings';

export const gid = (): string => `${
  numberRandom(6)
}-${
  lowerAlphaNumberRandom(6)
}-${
  lowerAlphaNumberRandom(6)
}-${
  lowerAlphaNumberRandom(6)
}-${
  lowerAlphaNumberRandom(6)
}-${
  lowerAlphaRandom(8)
}`;

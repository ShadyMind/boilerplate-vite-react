import { 
  randomFormattedFactory,
  binaryRandom,
  numberRandom,
  lowerAlphaRandom,
  lowerAlphaNumberRandom
} from './random';

describe('Random utilities', () => {
  describe('Random value composer', () => {
    it('should accept char formatter', () => {
      const binary = randomFormattedFactory(c => c % 2 + 48, 255);

      expect(binary(255).indexOf('0')).not.toStrictEqual(-1);
      expect(binary(255).indexOf('1')).not.toStrictEqual(-1);
    });

    it('should accept default length', () => {
      const binary = randomFormattedFactory(c => c % 2 + 48, 255);
      expect(binary().length).toStrictEqual(255);
    });

    it('should keep default value event if it not provided', () => {
      const binary = randomFormattedFactory(c => c % 2 + 48);
      expect(binary().length).toStrictEqual(8);
    });

    it('should throw error if no format function passed', () => {
      // @ts-ignore
      const sample = randomFormattedFactory(undefined);
      expect(() => sample()).toThrow(TypeError);
    });

    it('should generate random values', () => {
      const format = (c: number) => c % 2 + 48;
      const random = randomFormattedFactory(format);
      const sampleA = random();
      const sampleB = random();
      const sampleC = random();
      const sampleD = random();

      expect(sampleA).not.toStrictEqual(sampleB);
      expect(sampleB).not.toStrictEqual(sampleC);
      expect(sampleA).not.toStrictEqual(sampleC);
      expect(sampleD).not.toStrictEqual(sampleA);
      expect(sampleD).not.toStrictEqual(sampleB);
      expect(sampleD).not.toStrictEqual(sampleC);
    });

    it('shouldn\'t call console methods', () => {
      const consoleMethods = Object.keys(window.console)
        .reduce((acc, key) => {
          const methodName = key as keyof Console;

          if (typeof window.console[methodName] === 'function') {
            // @ts-ignore
            acc.push(jest.spyOn(global.console, methodName));
          }

          return acc;
        }, [] as jest.MockInstance<void, any[]>[]);
      

      randomFormattedFactory((code) => code, 1)();

      consoleMethods.forEach((method) => {
        expect(method).not.toBeCalled();
        method.mockRestore();
      });
    });
  });

  describe('Binary random value provider', () => {
    it('should return only zeroes and ones', () => {
      const sample = binaryRandom(255);
      expect(sample.includes('0')).toStrictEqual(true);
      expect(sample.includes('1')).toStrictEqual(true);
    });

    it('should use default random string length', () => {
      expect(binaryRandom().length).toStrictEqual(64);
    });
  });

  describe('number random value provider', () => {
    it('should return only zeroes and ones', () => {
      expect(numberRandom().includes(String.fromCharCode(58))).toStrictEqual(false);
      expect(numberRandom().includes(String.fromCharCode(47))).toStrictEqual(false);
    });

    it('should use default random string length', () => {
      expect(numberRandom().length).toStrictEqual(16);
    });
  });

  describe('lower alpha random value provider', () => {
    it('should return only lowercase letters', () => {
      expect(/^[a-z]+$/.test(lowerAlphaRandom())).toStrictEqual(true);
    });

    it('should use default random string length', () => {
      expect(lowerAlphaRandom().length).toStrictEqual(12);
    });
  });

  describe('lower alpha and numbers random value provider', () => {
    it('should return only lowercase letters', () => {
      expect(/^[a-z0-9]+$/.test(lowerAlphaNumberRandom())).toStrictEqual(true);
    });

    it('should use default random string length', () => {
      expect(lowerAlphaNumberRandom().length).toStrictEqual(8);
    });
  });
});

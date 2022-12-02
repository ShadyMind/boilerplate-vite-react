import { uid } from './uid';

describe('UID utility', () => {
  it('should use pattern', () => {
    expect(uid()).toMatch(/^[0-9]{6,6}-[a-z]{8,8}-[a-z0-9]{8,8}$/);
  });

  it('should be random', () => {
    const sampleA = uid();
    const sampleB = uid();
    const sampleC = uid();
    const sampleD = uid();

    expect(sampleA).not.toStrictEqual(sampleB)
    expect(sampleA).not.toStrictEqual(sampleC)
    expect(sampleA).not.toStrictEqual(sampleD)
    expect(sampleB).not.toStrictEqual(sampleC)
    expect(sampleB).not.toStrictEqual(sampleD)
    expect(sampleC).not.toStrictEqual(sampleD)
  });
});

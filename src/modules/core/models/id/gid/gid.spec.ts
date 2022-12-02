import { gid } from './gid';

describe('UID utility', () => {
  it('should use pattern', () => {
    expect(gid()).toMatch(/^[0-9]{6,6}(?:-[a-z0-9]{6,6}){4,4}-[a-z]{8,8}$/);
  });

  it('should be random', () => {
    const sampleA = gid();
    const sampleB = gid();
    const sampleC = gid();
    const sampleD = gid();

    expect(sampleA).not.toStrictEqual(sampleB)
    expect(sampleA).not.toStrictEqual(sampleC)
    expect(sampleA).not.toStrictEqual(sampleD)
    expect(sampleB).not.toStrictEqual(sampleC)
    expect(sampleB).not.toStrictEqual(sampleD)
    expect(sampleC).not.toStrictEqual(sampleD)
  });
});

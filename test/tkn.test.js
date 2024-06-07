import { tkn } from '../index';  // Adjust the path as necessary

describe('tkn.lookup', () => {
  it('should fetch data for "frame"', async () => {
    const result = await tkn.lookup('eth');
    expect(result).toBeDefined();
    expect(result.name).toEqual('Ethereum');
    console.log(result);
  });
});
import { tkn } from '../index';  // Adjust the path as necessary

describe('tkn.fetch', () => {
  it('should fetch data for "frame"', async () => {
    const result = await tkn.fetch('eth');
    expect(result).toBeDefined();
    expect(result).toHaveProperty('name');
    console.log(result);
    expect(result.name).toEqual('frame.eth');
  });
});
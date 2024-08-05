import { tkn } from '../index';  // Adjust the path as necessary

// describe('tkn.lookup', () => {
//   it('should fetch data for "frame"', async () => {
//     const result = await tkn.lookup('eth');
//     expect(result).toBeDefined();
//     console.log(result);
//     expect(result.name).toEqual('Ethereum');
//     console.log(result);
//   });
// });

describe('tkn.list', () => {
  // it('should fetch data for the handle "aerodrome"', async () => {
  //   const list = await tkn.list('aerodrome');
  //   expect(list).toBeDefined();
  //   expect(list.name).toEqual('Aerodrome');
  //   console.log(list);
  // });

  it('should fetch mockup data for the handle "aerodrome"', async () => {
    tkn.setMockupMode(true);
    const list = await tkn.list('aerodrome');
    expect(list).toBeDefined();
    expect(list.name).toEqual('Aerodrome');
    console.log(list);
  });
});


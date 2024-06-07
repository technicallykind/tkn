import { ethers } from 'ethers';
import { Record, Profile } from '@resolverworks/enson';

const rpcs = [
    // 'https://eth-mainnet.g.alchemy.com/v2/9T5n0ljpi0uGhLhyGnQNQ0ZJ8aU9awlQ'
    'https://eth-mainnet.rpc.grove.city/v1/298e23fd'
];

const providers = rpcs.map(url => new ethers.JsonRpcProvider(url));

const fallbackProvider = new ethers.FallbackProvider(providers);

const resolver = new ethers.Contract('0xe121A6e3a50008EFE9C617214320c2f9fF903411', [
    'function resolve(bytes name, bytes call) external view returns (bytes memory)',
], fallbackProvider);

const iface = new ethers.Interface([
    'function multicall(bytes[] memory calls) returns (bytes[] memory)'
]);

const profile = new Profile();
profile.setText([
    'name', 'avatar', 'url', 'description', 'decimals',
    'twitter', 'github', 'version', 'notice',
    'chainId', 'coinType', 'symbol', 'dweb',
]);
profile.setCoin([
    'eth', 'op', 'arb1', 'avax', 'bnb', 'cro', 'gno', 'matic',
    'near', 'sol', 'trx', 'zil', 'ftm', 'base'
]);
profile.setCoin(0x7f55c959); // sepolia
profile.setCoin(0xa7bc86aa); // degen
profile.chash = true;

// Updated lookup function to be environment-agnostic
async function lookup(prefix) {
    try {
        if (prefix && !prefix.endsWith('.')) prefix += '.';
        const name = `${prefix}tkn.eth`;
        const calls = profile.makeCallsForName(name);
        const multi = iface.encodeFunctionData('multicall', [calls]);
        const res = await resolver.resolve(ethers.dnsEncode(name, 255), multi, { enableCcipRead: true });
        const [answers] = iface.decodeFunctionResult('multicall', res);
        const record = new Record();
        record.parseCalls(calls, answers);
        return record.toJSON(true);
    } catch (err) {
        console.error(err);
        return { error: err.message };
    }
}

const tkn = {
    lookup,
    // other utilities
};

export { tkn };
import { NetworkId, NetworkIdByName } from '../types/common';

export const RATES_ENDPOINT_OP_MAINNET = `https://subgraph.satsuma-prod.com/${process.env.NEXT_PUBLIC_SATSUMA_API_KEY}/kwenta/optimism-latest-rates/api`;

export const RATES_ENDPOINT_OP_GOERLI =
	'https://api.thegraph.com/subgraphs/name/kwenta/optimism-goerli-latest-rates';

export const RATES_ENDPOINT_GOERLI = 'https://api.thegraph.com/subgraphs/name/kwenta/goerli-main';
export const RATES_ENDPOINTS = {
	[NetworkIdByName.goerli]: RATES_ENDPOINT_GOERLI,
	[NetworkIdByName['mainnet-ovm']]: RATES_ENDPOINT_OP_MAINNET,
	[NetworkIdByName['goerli-ovm']]: RATES_ENDPOINT_OP_GOERLI,
} as Partial<Record<NetworkId, string>>;

export const getRatesEndpoint = (networkId: NetworkId) => {
	return RATES_ENDPOINTS[networkId] ?? RATES_ENDPOINT_OP_MAINNET;
};

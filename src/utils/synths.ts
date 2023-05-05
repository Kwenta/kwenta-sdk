import { Contract } from 'ethcall';
import { BigNumber } from 'ethers';
import ERC20Abi from '../contracts/abis/ERC20.json';

export const getReasonFromCode = (reasonCode: BigNumber | number) => {
	switch (Number(reasonCode)) {
		case 1:
			return 'system-upgrade';
		case 2:
			return 'market-closure';
		case 3:
		case 55:
		case 65:
			return 'circuit-breaker';
		case 99999:
			return 'emergency';
		default:
			return 'market-closure';
	}
};

export const getProxySynthSymbol = (address: string) => {
	const c = new Contract(address, ERC20Abi);
	return c.symbol();
};

export function notNill<Value>(value: Value | null | undefined): value is Value {
	return !!value;
}

export type MarketClosureReason = ReturnType<typeof getReasonFromCode>;

import Wei, { wei } from '@synthetixio/wei';
import { BigNumber, ethers } from 'ethers';

import { DEFAULT_GAS_BUFFER } from '../constants/defaults';
import { GWEI_DECIMALS, GasLimitEstimate, SUPPORTED_NETWORKS } from '../constants/network';
import { NetworkId } from '../types/common';

type GasPrice<T = BigNumber> = {
	baseFeePerGas?: T; // Note that this is used for estimating price and should not be included in the transaction
	maxPriorityFeePerGas?: T;
	maxFeePerGas?: T;
	gasPrice?: T;
};

export const staticMainnetProvider = new ethers.providers.InfuraProvider();

export function isSupportedNetworkId(id: NetworkId): boolean {
	return SUPPORTED_NETWORKS.includes(id);
}

export const getTotalGasPrice = (gasPriceObj?: GasPrice | null) => {
	if (!gasPriceObj) return wei(0);
	const { gasPrice, baseFeePerGas, maxPriorityFeePerGas } = gasPriceObj;
	if (gasPrice) {
		return wei(gasPrice, GWEI_DECIMALS);
	}
	return wei(baseFeePerGas || 0, GWEI_DECIMALS).add(wei(maxPriorityFeePerGas || 0, GWEI_DECIMALS));
};

export const getTransactionPrice = (
	gasPrice: GasPrice | null,
	gasLimit: GasLimitEstimate,
	ethPrice: Wei | null,
	optimismLayerOneFee: Wei | null
) => {
	if (!gasPrice || !gasLimit || !ethPrice) return null;
	const totalGasPrice = getTotalGasPrice(gasPrice);
	const gasPriceCost = totalGasPrice.mul(wei(gasLimit, GWEI_DECIMALS)).mul(ethPrice);
	const l1Cost = ethPrice.mul(optimismLayerOneFee || 0);
	return gasPriceCost.add(l1Cost);
};

export const normalizeGasLimit = (gasLimit: number) => gasLimit + DEFAULT_GAS_BUFFER;

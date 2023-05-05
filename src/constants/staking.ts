import { BigNumber } from 'ethers';

export const EPOCH_START: Record<number, number> = {
	420: 1665878400,
	10: 1668556800,
};

export const WEEK = 604800;
export const DECAY_RATE = 0.0205;
export const INITIAL_WEEKLY_SUPPLY = BigNumber.from('14463369230769230769230');
export const STAKING_REWARDS_RATIO = 0.6;
export const TRADING_REWARDS_RATIO = 0.05;
export const STAKING_HIGH_GAS_LIMIT = BigNumber.from('400000');
export const STAKING_LOW_GAS_LIMIT = BigNumber.from('200000');
export const TRADING_REWARDS_CUTOFF_EPOCH = 13;
export const OP_REWARDS_CUTOFF_EPOCH = 22;

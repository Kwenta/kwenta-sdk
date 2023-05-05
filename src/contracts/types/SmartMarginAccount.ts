/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IAccount {
  export type ConditionalOrderStruct = {
    marketKey: PromiseOrValue<BytesLike>;
    marginDelta: PromiseOrValue<BigNumberish>;
    sizeDelta: PromiseOrValue<BigNumberish>;
    targetPrice: PromiseOrValue<BigNumberish>;
    gelatoTaskId: PromiseOrValue<BytesLike>;
    conditionalOrderType: PromiseOrValue<BigNumberish>;
    desiredFillPrice: PromiseOrValue<BigNumberish>;
    reduceOnly: PromiseOrValue<boolean>;
  };

  export type ConditionalOrderStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    number,
    BigNumber,
    boolean
  ] & {
    marketKey: string;
    marginDelta: BigNumber;
    sizeDelta: BigNumber;
    targetPrice: BigNumber;
    gelatoTaskId: string;
    conditionalOrderType: number;
    desiredFillPrice: BigNumber;
    reduceOnly: boolean;
  };
}

export declare namespace IPerpsV2MarketConsolidated {
  export type DelayedOrderStruct = {
    isOffchain: PromiseOrValue<boolean>;
    sizeDelta: PromiseOrValue<BigNumberish>;
    desiredFillPrice: PromiseOrValue<BigNumberish>;
    targetRoundId: PromiseOrValue<BigNumberish>;
    commitDeposit: PromiseOrValue<BigNumberish>;
    keeperDeposit: PromiseOrValue<BigNumberish>;
    executableAtTime: PromiseOrValue<BigNumberish>;
    intentionTime: PromiseOrValue<BigNumberish>;
    trackingCode: PromiseOrValue<BytesLike>;
  };

  export type DelayedOrderStructOutput = [
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    isOffchain: boolean;
    sizeDelta: BigNumber;
    desiredFillPrice: BigNumber;
    targetRoundId: BigNumber;
    commitDeposit: BigNumber;
    keeperDeposit: BigNumber;
    executableAtTime: BigNumber;
    intentionTime: BigNumber;
    trackingCode: string;
  };

  export type PositionStruct = {
    id: PromiseOrValue<BigNumberish>;
    lastFundingIndex: PromiseOrValue<BigNumberish>;
    margin: PromiseOrValue<BigNumberish>;
    lastPrice: PromiseOrValue<BigNumberish>;
    size: PromiseOrValue<BigNumberish>;
  };

  export type PositionStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    id: BigNumber;
    lastFundingIndex: BigNumber;
    margin: BigNumber;
    lastPrice: BigNumber;
    size: BigNumber;
  };
}

export interface SmartMarginAccountInterface extends utils.Interface {
  functions: {
    "ETH()": FunctionFragment;
    "GELATO()": FunctionFragment;
    "OPS()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "addDelegate(address)": FunctionFragment;
    "checker(uint256)": FunctionFragment;
    "committedMargin()": FunctionFragment;
    "conditionalOrderId()": FunctionFragment;
    "delegates(address)": FunctionFragment;
    "execute(uint8[],bytes[])": FunctionFragment;
    "executeConditionalOrder(uint256)": FunctionFragment;
    "freeMargin()": FunctionFragment;
    "getConditionalOrder(uint256)": FunctionFragment;
    "getDelayedOrder(bytes32)": FunctionFragment;
    "getPosition(bytes32)": FunctionFragment;
    "isAuth()": FunctionFragment;
    "isOwner()": FunctionFragment;
    "owner()": FunctionFragment;
    "removeDelegate(address)": FunctionFragment;
    "setInitialOwnership(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ETH"
      | "GELATO"
      | "OPS"
      | "VERSION"
      | "addDelegate"
      | "checker"
      | "committedMargin"
      | "conditionalOrderId"
      | "delegates"
      | "execute"
      | "executeConditionalOrder"
      | "freeMargin"
      | "getConditionalOrder"
      | "getDelayedOrder"
      | "getPosition"
      | "isAuth"
      | "isOwner"
      | "owner"
      | "removeDelegate"
      | "setInitialOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ETH", values?: undefined): string;
  encodeFunctionData(functionFragment: "GELATO", values?: undefined): string;
  encodeFunctionData(functionFragment: "OPS", values?: undefined): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addDelegate",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "checker",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "committedMargin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "conditionalOrderId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delegates",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "executeConditionalOrder",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "freeMargin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getConditionalOrder",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDelayedOrder",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPosition",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "isAuth", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeDelegate",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setInitialOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "ETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "GELATO", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "OPS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "checker", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "committedMargin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "conditionalOrderId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeConditionalOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "freeMargin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getConditionalOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDelayedOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isAuth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInitialOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "DelegatedAccountAdded(address,address)": EventFragment;
    "DelegatedAccountRemoved(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DelegatedAccountAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DelegatedAccountRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface DelegatedAccountAddedEventObject {
  caller: string;
  delegate: string;
}
export type DelegatedAccountAddedEvent = TypedEvent<
  [string, string],
  DelegatedAccountAddedEventObject
>;

export type DelegatedAccountAddedEventFilter =
  TypedEventFilter<DelegatedAccountAddedEvent>;

export interface DelegatedAccountRemovedEventObject {
  caller: string;
  delegate: string;
}
export type DelegatedAccountRemovedEvent = TypedEvent<
  [string, string],
  DelegatedAccountRemovedEventObject
>;

export type DelegatedAccountRemovedEventFilter =
  TypedEventFilter<DelegatedAccountRemovedEvent>;

export interface OwnershipTransferredEventObject {
  caller: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SmartMarginAccount extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SmartMarginAccountInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ETH(overrides?: CallOverrides): Promise<[string]>;

    GELATO(overrides?: CallOverrides): Promise<[string]>;

    OPS(overrides?: CallOverrides): Promise<[string]>;

    VERSION(overrides?: CallOverrides): Promise<[string]>;

    addDelegate(
      _delegate: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    checker(
      _conditionalOrderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

    committedMargin(overrides?: CallOverrides): Promise<[BigNumber]>;

    conditionalOrderId(overrides?: CallOverrides): Promise<[BigNumber]>;

    delegates(
      delegate: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    execute(
      _commands: PromiseOrValue<BigNumberish>[],
      _inputs: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeConditionalOrder(
      _conditionalOrderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    freeMargin(overrides?: CallOverrides): Promise<[BigNumber]>;

    getConditionalOrder(
      _conditionalOrderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IAccount.ConditionalOrderStructOutput]>;

    getDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [IPerpsV2MarketConsolidated.DelayedOrderStructOutput] & {
        order: IPerpsV2MarketConsolidated.DelayedOrderStructOutput;
      }
    >;

    getPosition(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [IPerpsV2MarketConsolidated.PositionStructOutput] & {
        position: IPerpsV2MarketConsolidated.PositionStructOutput;
      }
    >;

    isAuth(overrides?: CallOverrides): Promise<[boolean]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeDelegate(
      _delegate: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setInitialOwnership(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  ETH(overrides?: CallOverrides): Promise<string>;

  GELATO(overrides?: CallOverrides): Promise<string>;

  OPS(overrides?: CallOverrides): Promise<string>;

  VERSION(overrides?: CallOverrides): Promise<string>;

  addDelegate(
    _delegate: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  checker(
    _conditionalOrderId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

  committedMargin(overrides?: CallOverrides): Promise<BigNumber>;

  conditionalOrderId(overrides?: CallOverrides): Promise<BigNumber>;

  delegates(
    delegate: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  execute(
    _commands: PromiseOrValue<BigNumberish>[],
    _inputs: PromiseOrValue<BytesLike>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeConditionalOrder(
    _conditionalOrderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  freeMargin(overrides?: CallOverrides): Promise<BigNumber>;

  getConditionalOrder(
    _conditionalOrderId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IAccount.ConditionalOrderStructOutput>;

  getDelayedOrder(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<IPerpsV2MarketConsolidated.DelayedOrderStructOutput>;

  getPosition(
    _marketKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<IPerpsV2MarketConsolidated.PositionStructOutput>;

  isAuth(overrides?: CallOverrides): Promise<boolean>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeDelegate(
    _delegate: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setInitialOwnership(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    _newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ETH(overrides?: CallOverrides): Promise<string>;

    GELATO(overrides?: CallOverrides): Promise<string>;

    OPS(overrides?: CallOverrides): Promise<string>;

    VERSION(overrides?: CallOverrides): Promise<string>;

    addDelegate(
      _delegate: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    checker(
      _conditionalOrderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

    committedMargin(overrides?: CallOverrides): Promise<BigNumber>;

    conditionalOrderId(overrides?: CallOverrides): Promise<BigNumber>;

    delegates(
      delegate: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    execute(
      _commands: PromiseOrValue<BigNumberish>[],
      _inputs: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    executeConditionalOrder(
      _conditionalOrderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    freeMargin(overrides?: CallOverrides): Promise<BigNumber>;

    getConditionalOrder(
      _conditionalOrderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IAccount.ConditionalOrderStructOutput>;

    getDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<IPerpsV2MarketConsolidated.DelayedOrderStructOutput>;

    getPosition(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<IPerpsV2MarketConsolidated.PositionStructOutput>;

    isAuth(overrides?: CallOverrides): Promise<boolean>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeDelegate(
      _delegate: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setInitialOwnership(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DelegatedAccountAdded(address,address)"(
      caller?: PromiseOrValue<string> | null,
      delegate?: PromiseOrValue<string> | null
    ): DelegatedAccountAddedEventFilter;
    DelegatedAccountAdded(
      caller?: PromiseOrValue<string> | null,
      delegate?: PromiseOrValue<string> | null
    ): DelegatedAccountAddedEventFilter;

    "DelegatedAccountRemoved(address,address)"(
      caller?: PromiseOrValue<string> | null,
      delegate?: PromiseOrValue<string> | null
    ): DelegatedAccountRemovedEventFilter;
    DelegatedAccountRemoved(
      caller?: PromiseOrValue<string> | null,
      delegate?: PromiseOrValue<string> | null
    ): DelegatedAccountRemovedEventFilter;

    "OwnershipTransferred(address,address)"(
      caller?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      caller?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    ETH(overrides?: CallOverrides): Promise<BigNumber>;

    GELATO(overrides?: CallOverrides): Promise<BigNumber>;

    OPS(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    addDelegate(
      _delegate: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    checker(
      _conditionalOrderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    committedMargin(overrides?: CallOverrides): Promise<BigNumber>;

    conditionalOrderId(overrides?: CallOverrides): Promise<BigNumber>;

    delegates(
      delegate: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    execute(
      _commands: PromiseOrValue<BigNumberish>[],
      _inputs: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeConditionalOrder(
      _conditionalOrderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    freeMargin(overrides?: CallOverrides): Promise<BigNumber>;

    getConditionalOrder(
      _conditionalOrderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPosition(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAuth(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeDelegate(
      _delegate: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setInitialOwnership(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GELATO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addDelegate(
      _delegate: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    checker(
      _conditionalOrderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    committedMargin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    conditionalOrderId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegates(
      delegate: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    execute(
      _commands: PromiseOrValue<BigNumberish>[],
      _inputs: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeConditionalOrder(
      _conditionalOrderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    freeMargin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getConditionalOrder(
      _conditionalOrderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDelayedOrder(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPosition(
      _marketKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAuth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeDelegate(
      _delegate: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setInitialOwnership(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

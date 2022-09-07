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
} from "../../common";

export interface RouterEventEmitterInterface extends utils.Interface {
  functions: {
    "swapETHForExactTokens(address,uint256,address[],address,uint256)": FunctionFragment;
    "swapExactETHForTokens(address,uint256,address[],address,uint256)": FunctionFragment;
    "swapExactTokensForETH(address,uint256,uint256,address[],address,uint256)": FunctionFragment;
    "swapExactTokensForTokens(address,uint256,uint256,address[],address,uint256)": FunctionFragment;
    "swapTokensForExactETH(address,uint256,uint256,address[],address,uint256)": FunctionFragment;
    "swapTokensForExactTokens(address,uint256,uint256,address[],address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "swapETHForExactTokens"
      | "swapExactETHForTokens"
      | "swapExactTokensForETH"
      | "swapExactTokensForTokens"
      | "swapTokensForExactETH"
      | "swapTokensForExactTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "swapETHForExactTokens",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactETHForTokens",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForETH",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactETH",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactTokens",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "swapETHForExactTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactETHForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactTokens",
    data: BytesLike
  ): Result;

  events: {
    "Amounts(uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Amounts"): EventFragment;
}

export interface AmountsEventObject {
  amounts: BigNumber[];
}
export type AmountsEvent = TypedEvent<[BigNumber[]], AmountsEventObject>;

export type AmountsEventFilter = TypedEventFilter<AmountsEvent>;

export interface RouterEventEmitter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RouterEventEmitterInterface;

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
    swapETHForExactTokens(
      router: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapExactETHForTokens(
      router: PromiseOrValue<string>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapExactTokensForETH(
      router: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapExactTokensForTokens(
      router: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapTokensForExactETH(
      router: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapTokensForExactTokens(
      router: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  swapETHForExactTokens(
    router: PromiseOrValue<string>,
    amountOut: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    to: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapExactETHForTokens(
    router: PromiseOrValue<string>,
    amountOutMin: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    to: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapExactTokensForETH(
    router: PromiseOrValue<string>,
    amountIn: PromiseOrValue<BigNumberish>,
    amountOutMin: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    to: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapExactTokensForTokens(
    router: PromiseOrValue<string>,
    amountIn: PromiseOrValue<BigNumberish>,
    amountOutMin: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    to: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapTokensForExactETH(
    router: PromiseOrValue<string>,
    amountOut: PromiseOrValue<BigNumberish>,
    amountInMax: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    to: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapTokensForExactTokens(
    router: PromiseOrValue<string>,
    amountOut: PromiseOrValue<BigNumberish>,
    amountInMax: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    to: PromiseOrValue<string>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    swapETHForExactTokens(
      router: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExactETHForTokens(
      router: PromiseOrValue<string>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExactTokensForETH(
      router: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExactTokensForTokens(
      router: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapTokensForExactETH(
      router: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapTokensForExactTokens(
      router: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Amounts(uint256[])"(amounts?: null): AmountsEventFilter;
    Amounts(amounts?: null): AmountsEventFilter;
  };

  estimateGas: {
    swapETHForExactTokens(
      router: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapExactETHForTokens(
      router: PromiseOrValue<string>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapExactTokensForETH(
      router: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapExactTokensForTokens(
      router: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapTokensForExactETH(
      router: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapTokensForExactTokens(
      router: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swapETHForExactTokens(
      router: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapExactETHForTokens(
      router: PromiseOrValue<string>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTokensForETH(
      router: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTokensForTokens(
      router: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapTokensForExactETH(
      router: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapTokensForExactTokens(
      router: PromiseOrValue<string>,
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

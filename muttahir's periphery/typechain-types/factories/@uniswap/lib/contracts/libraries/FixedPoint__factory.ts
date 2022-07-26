/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  FixedPoint,
  FixedPointInterface,
} from "../../../../../@uniswap/lib/contracts/libraries/FixedPoint";

const _abi = [
  {
    inputs: [],
    name: "Q112",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESOLUTION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x610127610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c80633bf7a83e146042578063552f888a14605c575b600080fd5b60486076565b6040516053919060a5565b60405180910390f35b60626089565b604051606d919060d8565b60405180910390f35b6e01000000000000000000000000000081565b607081565b6000819050919050565b609f81608e565b82525050565b600060208201905060b860008301846098565b92915050565b600060ff82169050919050565b60d28160be565b82525050565b600060208201905060eb600083018460cb565b9291505056fea26469706673582212201c18d30c902543c612c5f42812146ec62126cf3bd56c5c34469c31c363c2dfd564736f6c63430008090033";

type FixedPointConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FixedPointConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FixedPoint__factory extends ContractFactory {
  constructor(...args: FixedPointConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FixedPoint> {
    return super.deploy(overrides || {}) as Promise<FixedPoint>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FixedPoint {
    return super.attach(address) as FixedPoint;
  }
  override connect(signer: Signer): FixedPoint__factory {
    return super.connect(signer) as FixedPoint__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FixedPointInterface {
    return new utils.Interface(_abi) as FixedPointInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FixedPoint {
    return new Contract(address, _abi, signerOrProvider) as FixedPoint;
  }
}

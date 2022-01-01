import { USDC } from "./../constants";
import { ERC20 } from "./../../generated/Bentobox/ERC20";
import { Address } from "@graphprotocol/graph-ts";

export const getUSDCDecimals = (): number => {
  return ERC20.bind(Address.fromString(USDC)).decimals();
};

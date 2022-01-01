import { DAI } from "./../constants";
import { ERC20 } from "./../../generated/Bentobox/ERC20";
import { Address } from "@graphprotocol/graph-ts";

export const getDAIDecimals = (): number => {
  return ERC20.bind(Address.fromString(DAI)).decimals();
};

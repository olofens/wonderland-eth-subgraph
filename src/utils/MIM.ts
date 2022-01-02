import { MIM, WONDERLAND_ETH_TREASURY } from "./../constants";
import { ERC20 } from "./../../generated/Bentobox/ERC20";
import { Address, BigDecimal, ethereum } from "@graphprotocol/graph-ts";
import { toDecimal } from "../Decimals";

export const getMIMDecimals = (): number => {
  return ERC20.bind(Address.fromString(MIM)).decimals();
};

export const getTreasuryMIMBalance = (): BigDecimal => {
  const mimContract = ERC20.bind(Address.fromString(MIM));
  Address.fromString(WONDERLAND_ETH_TREASURY);
  const balance = mimContract.balanceOf(Address.fromString(WONDERLAND_ETH_TREASURY));
  return toDecimal(balance, getMIMDecimals());
};

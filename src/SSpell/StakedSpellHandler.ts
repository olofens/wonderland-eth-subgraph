import { ERC20 } from "./../../generated/Bentobox/ERC20";
import { SSPELL, WONDERLAND_ETH_TREASURY } from "./../constants";
import { Address, BigInt } from "@graphprotocol/graph-ts";
import { toDecimal } from "../Decimals";
import { loadOrCreateStakedSpellMetric } from "./StakedSpellMetric";
import { getSPELLDecimals, getSPELLPrice } from "../utils/SPELL";
import { getSSPELLRatio } from "../utils/sSPELL";

export const logStakedSpellMetric = (date: string, timestamp: BigInt): void => {
  let sSpellMetric = loadOrCreateStakedSpellMetric(date, timestamp);

  const sSpellContract = ERC20.bind(Address.fromString(SSPELL));
  const sSpellCount = sSpellContract.balanceOf(Address.fromString(WONDERLAND_ETH_TREASURY));
  const readableSSpellCount = toDecimal(sSpellCount, getSPELLDecimals());

  sSpellMetric.SSPELLCount = readableSSpellCount;
  sSpellMetric.SPELLPrice = getSPELLPrice();
  sSpellMetric.SPELLSSPELLRatio = getSSPELLRatio();
  sSpellMetric.SSPELLPrice = sSpellMetric.SPELLPrice.times(sSpellMetric.SPELLSSPELLRatio);
  sSpellMetric.SSPELLValue = sSpellMetric.SSPELLCount.times(sSpellMetric.SSPELLPrice);

  sSpellMetric.save();
};

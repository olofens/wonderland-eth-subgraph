import { getTreasuryCRVBalance, getTreasuryCRVValue } from "./../utils/CRV";
import { getTreasuryCVXBalance, getTreasuryCVXValue } from "./../utils/CVX";
import { getTreasuryMIMBalance } from "./../utils/MIM";
import { getTreasuryWBTCValue } from "./../utils/WBTC";
import { getTreasuryWETHBalance, getTreasuryWETHValue } from "./../utils/WETH";
import { BigInt } from "@graphprotocol/graph-ts";

import { loadOrCreateTokenBalancesMetric } from "./TokenBalancesMetric";
import { getTreasuryWBTCBalance } from "../utils/WBTC";

export const logTokenBalancesMetric = (date: string, timestamp: BigInt): void => {
  let tokenMetric = loadOrCreateTokenBalancesMetric(date, timestamp);

  tokenMetric.ETHCount = getTreasuryWETHBalance();
  tokenMetric.ETHValue = getTreasuryWETHValue();
  tokenMetric.WBTCCount = getTreasuryWBTCBalance();
  tokenMetric.WBTCValue = getTreasuryWBTCValue();
  tokenMetric.MIMCount = getTreasuryMIMBalance();
  tokenMetric.MIMValue = getTreasuryMIMBalance();
  tokenMetric.CRVCount = getTreasuryCRVBalance();
  tokenMetric.CRVValue = getTreasuryCRVValue();
  tokenMetric.CVXCount = getTreasuryCVXBalance();
  tokenMetric.CVXValue = getTreasuryCVXValue();

  tokenMetric.save();
};

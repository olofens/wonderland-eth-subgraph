import { getWETHDecimals } from "./../utils/WETH";
import {
  POPSICLEFRAGOLA_WBTCWETH_3_PERCENT,
  POPSICLEFRAGOLA_WBTCWETH_3_PERCENT_STARTBLOCK,
  WONDERLAND_ETH_TREASURY
} from "./../constants";
import { PopsicleV3Optimizer } from "./../../generated/sOHM/PopsicleV3Optimizer";
import { Address, BigInt } from "@graphprotocol/graph-ts";
import { getWBTCDecimals, getWBTCPrice } from "../utils/WBTC";
import { getWETHPrice } from "../utils/WETH";
import { loadOrCreateWBTCWETHFragolaMetric } from "./WBTCWETHFragolaMetric";
import { toDecimal } from "../Decimals";

export const logPopsicleWBTCWETHMetric = (date: string, timestamp: BigInt, block: BigInt): void => {
  let popsicleMetric = loadOrCreateWBTCWETHFragolaMetric(date, timestamp);

  popsicleMetric.WBTCPrice = getWBTCPrice();
  popsicleMetric.WETHPrice = getWETHPrice();

  // Check if the contract exists at all.
  if (block.lt(BigInt.fromString(POPSICLEFRAGOLA_WBTCWETH_3_PERCENT_STARTBLOCK))) {
    popsicleMetric.save();
    return;
  }

  const popsicleOptimizer = PopsicleV3Optimizer.bind(
    Address.fromString(POPSICLEFRAGOLA_WBTCWETH_3_PERCENT)
  );
  const wonderlandBalance = popsicleOptimizer.balanceOf(
    Address.fromString(WONDERLAND_ETH_TREASURY)
  );
  const totalBalance = popsicleOptimizer.totalSupply();
  const wonderlandShare = wonderlandBalance.toBigDecimal().div(totalBalance.toBigDecimal()); // a number 0-1

  const poolHoldings = popsicleOptimizer.usersAmounts();
  const poolWBTC = toDecimal(poolHoldings.value0, getWBTCDecimals());
  const poolWETH = toDecimal(poolHoldings.value1, getWETHDecimals());

  const wonderlandWBTCCount = poolWBTC.times(wonderlandShare);
  const wonderlandWETHCount = poolWETH.times(wonderlandShare);

  const wonderlandWBTCValue = wonderlandWBTCCount.times(popsicleMetric.WBTCPrice);
  const wonderlandWETHValue = wonderlandWETHCount.times(popsicleMetric.WETHPrice);

  popsicleMetric.WBTCCount = wonderlandWBTCCount;
  popsicleMetric.WETHCount = wonderlandWETHCount;
  popsicleMetric.WBTCValue = wonderlandWBTCValue;
  popsicleMetric.WETHValue = wonderlandWETHValue;
  popsicleMetric.combinedValue = wonderlandWBTCValue.plus(wonderlandWETHValue);

  popsicleMetric.save();
};

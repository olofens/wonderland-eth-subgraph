import { BigInt } from "@graphprotocol/graph-ts";
import { CAULDRON_V2_STARTBLOCK } from "./constants";
import { LogRebase } from "./../generated/sOHM/sOHM";
import { logTricrypto2CauldronMetric } from "./Bentobox/BentoboxHandlers";
import { logUstMetric } from "./Degenbox/DegenboxHandlers";
import { logPopsicleWBTCWETHMetric } from "./Fragola/WBTCWETHFragolaHandler";
export function handleLogRebase(event: LogRebase): void {
  let timestamp = event.block.timestamp;

  let date = new Date(timestamp.toU64() * 1000).toISOString().split("T")[0];

  // ensure that we only log the metric if it actually exists at this block height
  if (event.block.number >= BigInt.fromU64(CAULDRON_V2_STARTBLOCK)) {
    logUstMetric(date, timestamp);
  }

  logTricrypto2CauldronMetric(date, timestamp);
  logPopsicleWBTCWETHMetric(date, timestamp, event.block.number);
}

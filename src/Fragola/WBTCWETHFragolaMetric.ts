import { PopsicleWBTCWETHMetric } from "./../../generated/schema";
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export function loadOrCreateWBTCWETHFragolaMetric(
  dateStr: string,
  timestamp: BigInt
): PopsicleWBTCWETHMetric {
  let popsicleMetric = PopsicleWBTCWETHMetric.load(dateStr);

  if (popsicleMetric == null) {
    popsicleMetric = new PopsicleWBTCWETHMetric(dateStr);
    popsicleMetric.timestamp = timestamp;
    popsicleMetric.WBTCCount = BigDecimal.fromString("0");
    popsicleMetric.WETHCount = BigDecimal.fromString("0");
    popsicleMetric.WBTCPrice = BigDecimal.fromString("0");
    popsicleMetric.WETHPrice = BigDecimal.fromString("0");
    popsicleMetric.WBTCValue = BigDecimal.fromString("0");
    popsicleMetric.WETHValue = BigDecimal.fromString("0");
    popsicleMetric.combinedValue = BigDecimal.fromString("0");

    popsicleMetric.save();
  } else {
    popsicleMetric.timestamp = timestamp;
    popsicleMetric.save();
  }

  return popsicleMetric;
}

import { StakedSpellMetric } from "./../../generated/schema";
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export function loadOrCreateStakedSpellMetric(
  dateStr: string,
  timestamp: BigInt
): StakedSpellMetric {
  let sSpellMetric = StakedSpellMetric.load(dateStr);

  if (sSpellMetric == null) {
    sSpellMetric = new StakedSpellMetric(dateStr);
    sSpellMetric.timestamp = timestamp;
    sSpellMetric.SPELLPrice = BigDecimal.fromString("0");
    sSpellMetric.SPELLSSPELLRatio = BigDecimal.fromString("0");
    sSpellMetric.SSPELLCount = BigDecimal.fromString("0");
    sSpellMetric.SSPELLValue = BigDecimal.fromString("0");
    sSpellMetric.SSPELLPrice = BigDecimal.fromString("0");

    sSpellMetric.save();
  } else {
    sSpellMetric.timestamp = timestamp;
    sSpellMetric.save();
  }

  return sSpellMetric;
}

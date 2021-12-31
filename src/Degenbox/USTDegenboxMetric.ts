import { USTDegenboxMetric } from "./../../generated/schema";
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export function loadOrCreateUSTDegenboxMetric(
  dateStr: string,
  timestamp: BigInt
): USTDegenboxMetric {
  let ustDegenboxMetric = USTDegenboxMetric.load(dateStr);

  if (ustDegenboxMetric == null) {
    ustDegenboxMetric = new USTDegenboxMetric(dateStr);
    ustDegenboxMetric.timestamp = timestamp;
    ustDegenboxMetric.debt = BigDecimal.fromString("0");
    ustDegenboxMetric.collateral = BigDecimal.fromString("0");

    ustDegenboxMetric.save();
  } else {
    ustDegenboxMetric.timestamp = timestamp;
    ustDegenboxMetric.save();
  }

  return ustDegenboxMetric;
}

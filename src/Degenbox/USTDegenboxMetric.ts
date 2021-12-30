import { USTDegenboxMetric } from "./../../generated/schema";
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export function loadOrCreateUSTDegenboxMetric(timestamp: BigInt): USTDegenboxMetric {
  let timestampStr = timestamp.toString();
  let ustDegenboxMetric = USTDegenboxMetric.load(timestampStr);

  if (ustDegenboxMetric == null) {
    ustDegenboxMetric = new USTDegenboxMetric(timestampStr);
    ustDegenboxMetric.timestamp = timestamp;
    ustDegenboxMetric.debt = BigDecimal.fromString("0");
    ustDegenboxMetric.collateral = BigDecimal.fromString("0");

    ustDegenboxMetric.save();
  }

  return ustDegenboxMetric;
}

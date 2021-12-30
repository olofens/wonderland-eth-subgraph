import { Cvxcrvtricrypto2BentoboxMetric } from "./../../generated/schema";
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export function loadOrCreateCvxcrvtricrypto2BentoboxMetric(
  timestamp: BigInt
): Cvxcrvtricrypto2BentoboxMetric {
  let timestampStr = timestamp.toString();
  let myMetric = Cvxcrvtricrypto2BentoboxMetric.load(timestampStr);

  if (myMetric == null) {
    myMetric = new Cvxcrvtricrypto2BentoboxMetric(timestampStr);
    myMetric.timestamp = timestamp;
    myMetric.debt = BigDecimal.fromString("0");
    myMetric.collateral = BigDecimal.fromString("0");

    myMetric.save();
  }

  return myMetric;
}

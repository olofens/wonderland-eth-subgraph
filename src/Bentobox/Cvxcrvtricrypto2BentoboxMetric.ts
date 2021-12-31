import { Cvxcrvtricrypto2BentoboxMetric } from "./../../generated/schema";
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export function loadOrCreateCvxcrvtricrypto2BentoboxMetric(
  dateStr: string,
  timestamp: BigInt
): Cvxcrvtricrypto2BentoboxMetric {
  let myMetric = Cvxcrvtricrypto2BentoboxMetric.load(dateStr);

  if (myMetric == null) {
    myMetric = new Cvxcrvtricrypto2BentoboxMetric(dateStr);
    myMetric.timestamp = timestamp;
    myMetric.debt = BigDecimal.fromString("0");
    myMetric.collateral = BigDecimal.fromString("0");

    myMetric.save();
  }

  return myMetric;
}

import { TokenBalancesMetric } from "./../../generated/schema";
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export function loadOrCreateTokenBalancesMetric(
  dateStr: string,
  timestamp: BigInt
): TokenBalancesMetric {
  let tokenMetric = TokenBalancesMetric.load(dateStr);

  if (tokenMetric == null) {
    tokenMetric = new TokenBalancesMetric(dateStr);
    tokenMetric.timestamp = timestamp;
    tokenMetric.MIMCount = BigDecimal.fromString("0");
    tokenMetric.MIMValue = BigDecimal.fromString("0");
    tokenMetric.CVXCount = BigDecimal.fromString("0");
    tokenMetric.CVXValue = BigDecimal.fromString("0");
    tokenMetric.WBTCCount = BigDecimal.fromString("0");
    tokenMetric.WBTCValue = BigDecimal.fromString("0");
    tokenMetric.CRVCount = BigDecimal.fromString("0");
    tokenMetric.CRVValue = BigDecimal.fromString("0");
    tokenMetric.ETHCount = BigDecimal.fromString("0");
    tokenMetric.ETHValue = BigDecimal.fromString("0");

    tokenMetric.save();
  } else {
    tokenMetric.timestamp = timestamp;
    tokenMetric.save();
  }

  return tokenMetric;
}

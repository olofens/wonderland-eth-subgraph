import { Univ3MIMWETHMetric } from "../../generated/schema";
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export function loadOrCreateUniv3WETHMIMMetric(
  dateStr: string,
  timestamp: BigInt
): Univ3MIMWETHMetric {
  let univ3Metric = Univ3MIMWETHMetric.load(dateStr);

  if (univ3Metric == null) {
    univ3Metric = new Univ3MIMWETHMetric(dateStr);
    univ3Metric.timestamp = timestamp;
    univ3Metric.MIMCount = BigDecimal.fromString("0");
    univ3Metric.WETHCount = BigDecimal.fromString("0");
    univ3Metric.MIMValue = BigDecimal.fromString("0");
    univ3Metric.WETHValue = BigDecimal.fromString("0");
    univ3Metric.totalValue = BigDecimal.fromString("0");

    univ3Metric.save();
  } else {
    univ3Metric.timestamp = timestamp;
    univ3Metric.save();
  }

  return univ3Metric;
}
